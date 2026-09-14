jest.mock('src/prisma/prisma.service', () => ({
  PrismaService: jest.fn(),
}), { virtual: true });

import { DeliveriesService } from './deliveries.service';

describe('DeliveriesService', () => {
  it('decrements stock atomically when creating a delivery', async () => {
    const prisma = {
      visitador: {
        findUnique: jest.fn().mockResolvedValue({ id: 'visitor-1', nombre: 'Ana' }),
        update: jest.fn().mockResolvedValue({}),
      },
      muestra: {
        findUnique: jest.fn().mockResolvedValue({ id: 'sample-1', nombre: 'Paracetamol', existencias: 10, umbral_minimo: 2 }),
        updateMany: jest.fn().mockResolvedValue({ count: 1 }),
      },
      entrega: {
        create: jest.fn().mockResolvedValue({ id: 'delivery-1' }),
      },
      logInventario: {
        create: jest.fn().mockResolvedValue({}),
      },
      $queryRawUnsafe: jest.fn().mockResolvedValue([{ folio: 'CE-000001' }]),
      $transaction: jest.fn(async (callback) => callback(prisma)),
    } as any;

    const service = new DeliveriesService(prisma);

    await service.create({
      muestra_id: 'sample-1',
      visitador_id: 'visitor-1',
      cantidad: 2,
      fecha: '2026-07-09',
      hora: '10:00',
      estado: 'Entregado',
    });

    expect(prisma.muestra.updateMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: {
          id: 'sample-1',
          existencias: { gte: 2 },
        },
        data: { existencias: { decrement: 2 } },
      }),
    );
  });

  it('reverts assigned samples only once when removing a delivery', async () => {
    const prisma = {
      entrega: {
        findUnique: jest.fn().mockResolvedValue({
          id: 'delivery-1',
          muestra_id: 'sample-1',
          visitador_id: 'visitor-1',
          cantidad: 3,
        }),
        delete: jest.fn().mockResolvedValue({}),
      },
      muestra: {
        update: jest.fn().mockResolvedValue({}),
      },
      visitador: {
        update: jest.fn().mockResolvedValue({}),
      },
      logInventario: {
        create: jest.fn().mockResolvedValue({}),
      },
      $transaction: jest.fn(async (callback) => callback(prisma)),
    } as any;

    const service = new DeliveriesService(prisma);

    await service.remove('delivery-1');

    expect(prisma.visitador.update).toHaveBeenCalledTimes(1);
    expect(prisma.visitador.update).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { id: 'visitor-1' },
        data: {
          muestras_asignadas: {
            decrement: 3,
          },
        },
      }),
    );
  });
});
