import { Controller, Get } from '@nestjs/common';
import { InventoryLogsService } from './inventory-logs.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('inventory-logs')
export class InventoryLogsController {
    constructor (private readonly logsService: InventoryLogsService) {}
    @Get()
    @ApiOperation({summary: "Get all inventory logs"})
    @ApiResponse({status: 200, description: "Returns an array of inventory logs"})
    async findAll() {
        return this.logsService.findAll();
    }
    
    @Get("sample/sample/:muestraId")
    @ApiOperation({summary: "Get inventory logs for a specific sample"})
    @ApiResponse({status: 200, description: "Returns an array of inventory logs for the specified sample"})
    @ApiResponse({status: 404, description: "Sample not found"})
    async findBySample(muestraId: string) {
        return this.logsService.findBySample(muestraId);
    }
}
