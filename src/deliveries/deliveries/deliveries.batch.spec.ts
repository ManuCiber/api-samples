jest.mock('src/prisma/prisma.service', () => ({ PrismaService: jest.fn() }), { virtual: true });
import { DeliveriesService } from './deliveries.service';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { CreateDeliveryBatchDto } from './dto/create-delivery-batch.dto';

function setup() {
  let fingerprint: string;
  const tx = {
    $executeRawUnsafe: jest.fn().mockImplementation(async (_sql, _key, value) => { fingerprint = value; return 1; }),
    $queryRawUnsafe: jest.fn().mockImplementation(async (sql) => sql.includes('nextval')
      ? [{ folio: 'CE-000001' }]
      : [{ huella: fingerprint, respuesta: null }]),
    visitador: { findUnique: jest.fn().mockResolvedValue({ id: 'v', nombre: 'Ana' }), update: jest.fn().mockResolvedValue({}) },
    muestra: { findUnique: jest.fn().mockResolvedValue({ nombre: 'Producto', existencias: 10, umbral_minimo: 2 }), updateMany: jest.fn().mockResolvedValue({ count: 1 }) },
    entrega: { create: jest.fn().mockImplementation(async ({data}) => ({ id: data.muestra_id, ...data })) },
    logInventario: { create: jest.fn().mockResolvedValue({}) },
  };
  const prisma = { $transaction: jest.fn(async (callback) => callback(tx)) };
  return { tx, prisma, service: new DeliveriesService(prisma as any) };
}
const batch = { visitador_id: 'v', items: [{ muestra_id: 'a', cantidad: 2 }, { muestra_id: 'b', cantidad: 3 }] };

describe('Delivery batches', () => {
  it('uses one transaction and one guarded decrement per item, returning saved records', async () => {
    const {tx, prisma, service} = setup();
    const result = await service.createBatch(batch);
    expect(prisma.$transaction).toHaveBeenCalledTimes(1);
    expect(result.data.map(e => e.id)).toEqual(['a', 'b']);
    expect(tx.muestra.updateMany).toHaveBeenCalledTimes(2);
    expect(tx.muestra.updateMany).toHaveBeenNthCalledWith(2, { where: {id: 'b', existencias: {gte: 3}}, data: {existencias: {decrement: 3}} });
    expect(tx.visitador.update).toHaveBeenCalledTimes(2);
    expect(tx.logInventario.create).toHaveBeenCalledTimes(2);
    expect(result.data[0].hora.getTime()).not.toBeNaN();
    expect(result.data[0].fecha).toEqual(result.data[1].fecha);
  });
  it('propagates a second-item stock failure out of the transaction for rollback', async () => {
    const {tx, service} = setup();
    tx.muestra.updateMany.mockResolvedValueOnce({count: 1}).mockResolvedValueOnce({count: 0});
    await expect(service.createBatch(batch)).rejects.toThrow('Existencias insuficientes');
    expect(tx.entrega.create).toHaveBeenCalledTimes(1);
  });
  it('propagates persistence failures instead of returning success', async () => {
    const {tx, service} = setup();
    tx.logInventario.create.mockRejectedValueOnce(new Error('write failed'));
    await expect(service.createBatch(batch)).rejects.toThrow('write failed');
    expect(tx.muestra.updateMany).toHaveBeenCalledTimes(1);
  });
  it.each([0, -1, 1.5])('rejects invalid quantity %s', async cantidad => {
    const {tx, service} = setup();
    await expect(service.createBatch({visitador_id: 'v', items: [{muestra_id: 'a', cantidad}]})).rejects.toThrow();
    expect(tx.muestra.updateMany).not.toHaveBeenCalled();
  });
  it('rejects duplicate and empty batches before opening a transaction', async () => {
    const {prisma, service} = setup();
    await expect(service.createBatch({...batch, items: []})).rejects.toThrow();
    await expect(service.createBatch({...batch, items: [batch.items[0], batch.items[0]]})).rejects.toThrow();
    expect(prisma.$transaction).not.toHaveBeenCalled();
  });
  it('validates nested request quantities', async () => {
    const dto = plainToInstance(CreateDeliveryBatchDto, {...batch, items: [{muestra_id: 'a', cantidad: -2}]});
    expect((await validate(dto)).length).toBeGreaterThan(0);
  });
});
