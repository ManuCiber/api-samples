import { createHash, randomUUID } from 'node:crypto';
import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import type { Prisma } from '../../generated/prisma/client';
import { CreateDeliveryBatchDto } from './dto/create-delivery-batch.dto';
import { CreateDeliveryDto } from './dto/create-delivery.dto';

@Injectable()
export class DeliveriesService {
    constructor(private prisma: PrismaService){}
    async create(createDeliveryDto: CreateDeliveryDto, usuarioId?: string){
        return this.prisma.$transaction((tx) => this.createInTransaction(tx, createDeliveryDto, usuarioId));
    }

    async createBatch(dto: CreateDeliveryBatchDto, usuarioId?: string, clave: string = randomUUID()) {
        if (!dto.items?.length || dto.items.length > 100 ||
            new Set(dto.items.map(item => item.muestra_id)).size !== dto.items.length) {
            throw new BadRequestException('El lote debe contener entre 1 y 100 muestras distintas');
        }
        const huella = createHash('sha256').update(JSON.stringify({
            usuarioId: usuarioId ?? null,
            visitador_id: dto.visitador_id,
            items: [...dto.items].sort((a, b) => a.muestra_id.localeCompare(b.muestra_id)).map(item => ({ muestra_id: item.muestra_id, cantidad: item.cantidad })),
        })).digest('hex');
        // Use the same local business date/time for every item in the batch.
        const parts = new Intl.DateTimeFormat('en-CA', {
            timeZone: 'America/Santo_Domingo', year: 'numeric', month: '2-digit',
            day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23',
        }).formatToParts(new Date());
        const part = (name: string) => parts.find(p => p.type === name)!.value;
        const fecha = [part('year'), part('month'), part('day')].join('-');
        const hora = [part('hour'), part('minute'), part('second')].join(':');
        return this.prisma.$transaction(async (tx) => {
            // ON CONFLICT waits for a concurrent request with this key to commit or roll back.
            // All SQL text is constant; values are bound PostgreSQL parameters.
            await tx.$executeRawUnsafe('INSERT INTO "OperacionEntrega" ("clave", "huella") VALUES ($1, $2) ON CONFLICT ("clave") DO NOTHING', clave, huella);
            const [operation] = await tx.$queryRawUnsafe<{ huella: string; respuesta: Prisma.JsonValue | null }[]>('SELECT "huella", "respuesta" FROM "OperacionEntrega" WHERE "clave" = $1', clave);
            if (operation.huella !== huella) throw new ConflictException('Esta clave ya se utilizó para otra entrega');
            if (operation.respuesta !== null) {
                const saved = operation.respuesta as unknown as {
                    success: boolean;
                    data: Awaited<ReturnType<DeliveriesService['createInTransaction']>>['data'][];
                    alerts: string[];
                };
                return { ...saved, data: saved.data.map(item => ({ ...item,
                    fecha: new Date(item.fecha), hora: new Date(item.hora), created_at: new Date(item.created_at),
                })) };
            }
            const folio = await this.nextFolio(tx);
            const data: Awaited<ReturnType<DeliveriesService['createInTransaction']>>['data'][] = [];
            const alerts: string[] = [];
            // Stable lock order reduces deadlocks between overlapping batches.
            for (const item of [...dto.items].sort((a, b) => a.muestra_id.localeCompare(b.muestra_id))) {
                const result = await this.createInTransaction(tx, {
                    ...item, visitador_id: dto.visitador_id, fecha, hora, estado: 'completada', folio,
                }, usuarioId);
                data.push(result.data);
                if (result.alert) alerts.push(result.alert);
            }
            const response = { success: true, data, alerts };
            await tx.$executeRawUnsafe('UPDATE "OperacionEntrega" SET "respuesta" = $2::jsonb WHERE "clave" = $1', clave, JSON.stringify(response));
            return response;
        }, { timeout: 15000 });
    }

    private async createInTransaction(tx: Prisma.TransactionClient, createDeliveryDto: CreateDeliveryDto, usuarioId?: string) {
        const {muestra_id, visitador_id, cantidad, fecha, hora, estado} = createDeliveryDto
        if (!Number.isSafeInteger(cantidad) || cantidad < 1) {
            throw new BadRequestException('La cantidad debe ser un entero positivo');
        }

        const visitor = await tx.visitador.findUnique({
            where: {id: visitador_id}
        })

        if(!visitor) {
            throw new NotFoundException(`Visitador con ID ${visitador_id} no encontrado`);
        }


            const sample = await tx.muestra.findUnique({
                where: {id: muestra_id}
            })
            if(!sample) {
                throw new NotFoundException(`Muestra medica con ID ${muestra_id}`)
            }

            const stockUpdate = await tx.muestra.updateMany({
                where: {
                    id: muestra_id,
                    existencias: {
                        gte: cantidad
                    }
                },
                data: {
                    existencias: {
                        decrement: cantidad
                    }
                }
            })

            if(stockUpdate.count === 0){
                throw new BadRequestException(
                    `Existencias insuficientes para la muestra "${sample.nombre}". Disponibles: ${sample.existencias}, solicitadas: ${cantidad}`
                );
            }

            const finalFecha = fecha ? new Date(`${fecha}T00:00:00Z`): new Date()
            if(isNaN(finalFecha.getTime())){
                throw new BadRequestException(`La fecha ${fecha} no es valida`)
            }
            const finalHora = hora ? new Date(`1970-01-01T${hora.length === 5 ? hora + ':00' : hora}Z`): new Date()
            if (isNaN(finalHora.getTime())) throw new BadRequestException('Hora no valida');

            const delivery = await tx.entrega.create({
                data: {
                    muestra_id,
                    visitador_id,
                    cantidad,
                    fecha: finalFecha,
                    hora: finalHora,
                    estado: estado || 'Entregado',
                    folio: createDeliveryDto.folio ?? await this.nextFolio(tx),
                    nombre_muestra: sample.nombre,
                    nombre_visitador: visitor.nombre
                }
            })

            const updatedSample = await tx.muestra.findUnique({
                where: {id: muestra_id}
            })

            await tx.visitador.update({
                where: {id: visitador_id},
                data:{
                    muestras_asignadas: {
                        increment: cantidad
                    }
                }
            })

            await tx.logInventario.create({
                data: {
                    muestra_id,
                    tipo_movimiento: "SALIDA_ENTREGA",
                    cantidad,
                    descripcion: `Entrega de ${cantidad} unidades al visitador ${visitor.nombre}`,
                    usuario_id: usuarioId || null
                }
            })

            const currentSample = updatedSample!;
            const isUnderThreshold = currentSample.existencias <= currentSample.umbral_minimo;

            return {
                success: true,
                message: "Entrega registrada de forma exitosa",
                data: delivery,
                alert: isUnderThreshold ? `Alerta: El stock de la muestra medica "${sample.nombre}" ha caído por debajo del umbral mínimo. Stock actual: ${currentSample.existencias}, Umbral: ${currentSample.umbral_minimo}`:null
            }
    }

    private async nextFolio(tx: Prisma.TransactionClient): Promise<string> {
        const [row] = await tx.$queryRawUnsafe<{ folio: string }[]>(
            `SELECT 'CE-' || LPAD(nextval('"constancia_folio_seq"')::text, 6, '0') AS folio`,
        );
        return row.folio;
    }

    async findAll(){
        const deliveries = await this.prisma.entrega.findMany({
            include: {
                muestra: true,
                visitador: true
            },
            orderBy: {created_at: 'desc'}
        })
        return {
            success: true,
            data: deliveries
        }
    }

    async findOne(id: string){
        const delivery = await this.prisma.entrega.findUnique({
            where: {id},
            include: {
                muestra: true,
                visitador: true
            }
        })
        if(!delivery){
            throw new NotFoundException(`Entrega con ID ${id} no encontrada`);
        }
        return {
            success: true,
            data: delivery
        }
    }

    async remove(id: string){
        const existing = await this.prisma.entrega.findUnique({
            where: {id}
        })
        if(!existing) {
            throw new NotFoundException(`Entrega con ID ${id} no encontrada`)
        }

        await this.prisma.$transaction(async (tx) => {
            await tx.entrega.delete({
                where: {id}
            })
            await tx.muestra.update({
                where: {id: existing.muestra_id},
                data: {
                    existencias:{
                        increment: existing.cantidad
                    }
                }
            })

            await tx.visitador.update({
                where: {id: existing.visitador_id},
                data: {
                    muestras_asignadas: {
                        decrement: existing.cantidad
                    }
                }
            })

            await tx.logInventario.create({
                data:{
                    muestra_id: existing.muestra_id,
                    tipo_movimiento: 'REVERSION_ENTREGA',
                    cantidad: existing.cantidad,
                    descripcion: `Eliminación y revisión de la entrega ${id}. Se devuelven ${existing.cantidad} unidades al stock`
                }
            })
        })

        return{
            success: true,
            message: "Entrega eliminada y stock  revertido exitosamente"
        }
    }
}
