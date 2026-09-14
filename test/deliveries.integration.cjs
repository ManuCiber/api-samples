const { randomUUID } = require('node:crypto');
// Run only against a dedicated, disposable local PostgreSQL database.
// TEST_DATABASE_URL must point to a database ending in _integration_test.
const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');
const { PrismaClient } = require('../src/generated/prisma/client.js');
const { PrismaPg } = require('@prisma/adapter-pg');
const url = new URL(process.env.TEST_DATABASE_URL || 'http://missing');
if (!['127.0.0.1', 'localhost', '[::1]'].includes(url.hostname) || !url.pathname.endsWith('_integration_test') || !['postgresql:', 'postgres:'].includes(url.protocol)) {
  throw new Error('Provide TEST_DATABASE_URL for a disposable local *_integration_test database.');
}
// Load the actual service without importing the application environment or production connection.
const filename = path.resolve(__dirname, '../src/deliveries/deliveries/deliveries.service.ts');
const compiled = ts.transpileModule(fs.readFileSync(filename, 'utf8'), { compilerOptions: {
  module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, experimentalDecorators: true,
}}).outputText;
const loaded = new Module(filename, module);
loaded.filename = filename;
loaded.paths = Module._nodeModulePaths(path.dirname(filename));
const originalRequire = loaded.require.bind(loaded);
loaded.require = name => name === 'src/prisma/prisma.service' ? { PrismaService: class {} } : originalRequire(name);
loaded._compile(compiled, filename);
const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString: url.toString() }) });
const service = new loaded.exports.DeliveriesService(prisma);
const created = [];
const operationKeys = new Set();
const originalCreateBatch = service.createBatch.bind(service);
service.createBatch = (dto, user, key = randomUUID()) => {
  operationKeys.add(key);
  return originalCreateBatch(dto, user, key);
};
before(async () => { await prisma.$connect(); });
after(async () => {
  try {
    for (const key of operationKeys) await prisma.$executeRawUnsafe('DELETE FROM "OperacionEntrega" WHERE "clave" = $1', key);
    for (const { visitor, samples } of created) {
      const ids = samples.map(s => s.id);
      await prisma.entrega.deleteMany({ where: { visitador_id: visitor.id } });
      await prisma.logInventario.deleteMany({ where: { muestra_id: { in: ids } } });
      await prisma.muestra.deleteMany({ where: { id: { in: ids } } });
      await prisma.visitador.delete({ where: { id: visitor.id } });
    }
  } finally { await prisma.$disconnect(); }
});
async function fixture(stocks) {
  const visitor = await prisma.visitador.create({ data: { nombre: 'Integration test', zona: 'Test', muestras_asignadas: 0 } });
  const entry = { visitor, samples: [] }; created.push(entry);
  for (const stock of stocks) entry.samples.push(await prisma.muestra.create({ data: { nombre: 'Integration sample', existencias: stock, umbral_minimo: 1 } }));
  entry.samples.sort((a,b) => a.id.localeCompare(b.id));
  return entry;
}
async function counts(visitor) {
  return { deliveries: await prisma.entrega.count({where:{visitador_id:visitor.id}}), assigned: (await prisma.visitador.findUniqueOrThrow({where:{id:visitor.id}})).muestras_asignadas };
}
test('commits a complete batch and decrements stock exactly once', async () => {
  const {visitor,samples} = await fixture([10,10]);
  const result = await service.createBatch({visitador_id:visitor.id,items:samples.map(s=>({muestra_id:s.id,cantidad:2}))});
  assert.equal(result.data.length,2);
  assert.deepEqual(await counts(visitor),{deliveries:2,assigned:4});
  for (const sample of samples) {
    assert.equal((await prisma.muestra.findUniqueOrThrow({where:{id:sample.id}})).existencias,8);
    assert.equal(await prisma.logInventario.count({where:{muestra_id:sample.id}}),1);
  }
});
test('rolls back the first item when the second item has insufficient stock', async () => {
  const {visitor,samples} = await fixture([10,10]);
  await assert.rejects(service.createBatch({visitador_id:visitor.id,items:[{muestra_id:samples[0].id,cantidad:2},{muestra_id:samples[1].id,cantidad:11}]}),/Existencias insuficientes/);
  assert.deepEqual(await counts(visitor),{deliveries:0,assigned:0});
  for (const sample of samples) {
    assert.equal((await prisma.muestra.findUniqueOrThrow({where:{id:sample.id}})).existencias,10);
    assert.equal(await prisma.logInventario.count({where:{muestra_id:sample.id}}),0);
  }
});
test('concurrent deliveries cannot oversell the same stock', async () => {
  const {visitor,samples} = await fixture([5]);
  const batch = {visitador_id:visitor.id,items:[{muestra_id:samples[0].id,cantidad:4}]};
  const results = await Promise.allSettled([service.createBatch(batch),service.createBatch(batch)]);
  assert.equal(results.filter(r=>r.status==='fulfilled').length,1);
  assert.equal(results.filter(r=>r.status==='rejected').length,1);
  assert.equal((await prisma.muestra.findUniqueOrThrow({where:{id:samples[0].id}})).existencias,1);
  assert.deepEqual(await counts(visitor),{deliveries:1,assigned:4});
  assert.equal(await prisma.logInventario.count({where:{muestra_id:samples[0].id}}),1);
});

test('replaying a committed key returns the same delivery and does not decrement again', async () => {
 const {visitor,samples}=await fixture([10]);
 const batch={visitador_id:visitor.id,items:[{muestra_id:samples[0].id,cantidad:2}]};
 const key=randomUUID();
 const first=await service.createBatch(batch,undefined,key);
 const replay=await service.createBatch(batch,undefined,key);
 assert.deepEqual(JSON.parse(JSON.stringify(first)),JSON.parse(JSON.stringify(replay)));
 assert.deepEqual(await counts(visitor),{deliveries:1,assigned:2});
 assert.equal((await prisma.muestra.findUniqueOrThrow({where:{id:samples[0].id}})).existencias,8);
});
test('simultaneous requests using one key commit only once',async()=>{
 const {visitor,samples}=await fixture([10]);const key=randomUUID();
 const batch={visitador_id:visitor.id,items:[{muestra_id:samples[0].id,cantidad:2}]};
 const results=await Promise.all(Array.from({length:4},()=>service.createBatch(batch,undefined,key)));
 assert.equal(new Set(results.map(r=>r.data[0].id)).size,1);
 assert.deepEqual(await counts(visitor),{deliveries:1,assigned:2});
 assert.equal(await prisma.logInventario.count({where:{muestra_id:samples[0].id}}),1);
});
test('reusing a key for changed content or another actor conflicts',async()=>{
 const {visitor,samples}=await fixture([10]);const key=randomUUID();
 const batch={visitador_id:visitor.id,items:[{muestra_id:samples[0].id,cantidad:2}]};
 await service.createBatch(batch,undefined,key);
 await assert.rejects(service.createBatch({...batch,items:[{muestra_id:samples[0].id,cantidad:3}]},undefined,key),/otra entrega/);
 await assert.rejects(service.createBatch(batch,'another-user',key),/otra entrega/);
 assert.deepEqual(await counts(visitor),{deliveries:1,assigned:2});
});
test('failed transaction leaves no key and can be retried after stock is restored',async()=>{
 const {visitor,samples}=await fixture([1]);const key=randomUUID();
 const batch={visitador_id:visitor.id,items:[{muestra_id:samples[0].id,cantidad:2}]};
 await assert.rejects(service.createBatch(batch,undefined,key),/Existencias insuficientes/);
 assert.equal((await prisma.$queryRawUnsafe('SELECT "clave" FROM "OperacionEntrega" WHERE "clave" = $1',key)).length,0);
 await prisma.muestra.update({where:{id:samples[0].id},data:{existencias:5}});
 await service.createBatch(batch,undefined,key);
 assert.deepEqual(await counts(visitor),{deliveries:1,assigned:2});
});
