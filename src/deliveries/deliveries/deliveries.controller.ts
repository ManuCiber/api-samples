import { isUUID } from 'class-validator';
import { CreateDeliveryBatchDto } from './dto/create-delivery-batch.dto';
import { Body, Headers, BadRequestException, Controller, Delete, Get, Param, Post, Req } from '@nestjs/common';
import { DeliveriesService } from './deliveries.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateDeliveryDto } from './dto/create-delivery.dto';

@Controller('deliveries')
export class DeliveriesController {
    constructor(private readonly deliveriesService: DeliveriesService){}
    @Post()
    @ApiOperation({summary: "Registrar una entrega de muestra medica a un visitador"})
    @ApiResponse({status: 201, description: "Entrega Registrada exitosamente y stock actualizado de forma atómica"})
    @ApiResponse({status: 400, description: "La cantidad solicitada supera las existencias disponibles"})
    @ApiResponse({status: 404, description: "muestra medica o visitador no encontrado"})
    async create(@Body() CreateDeliveryDto: CreateDeliveryDto, @Req() req: any){
        const usuarioId = req.user?.id
        return this.deliveriesService.create(CreateDeliveryDto, usuarioId);
    }

    @Post('batch')
    @ApiOperation({summary: 'Registrar un lote completo y descontar inventario en una transaccion'})
    async createBatch(@Body() dto: CreateDeliveryBatchDto, @Req() req: any, @Headers('idempotency-key') clave: string) {
        if (!isUUID(clave ?? '', '4')) throw new BadRequestException('Idempotency-Key debe ser un UUID v4');
        return this.deliveriesService.createBatch(dto, req.user?.id, clave);
    }

    @Get()
    @ApiOperation({summary: "Listar todas las entregas registradas"})
    async findAll(){
        return this.deliveriesService.findAll();
    }

    @Get(':id')
    @ApiOperation({summary: "Obtener el detalle de una entrega en particular"})
    @ApiResponse({status: 404, description: "Entrega no encontrada"})
    async findOne(@Param('id') id: string){
        return this.deliveriesService.findOne(id)
    }

    @Delete(':id')
    @ApiOperation({summary: "Eliminar una entrega y revertir el stock de la muestra medica"})
    @ApiResponse({status: 404, description: "Entrega no encontrada"})
    async remove(@Param('id') id: string){
        return this.deliveriesService.remove(id)
    }
}
