import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { SamplesService } from "./samples.service";
import { CreateSampleDto } from "./dto/create-sample";
import { UpdateSampleDto } from "./dto/update-sample";

@ApiTags('Samples')

@Controller('samples')
export class SampleController {
    constructor(private readonly samplesService: SamplesService){}

    @ApiTags('Muestras Medicas')
    @Post('samples')
    @ApiOperation({summary: "Crear una nueva muestra medica"})
    @ApiResponse({status: 201, description: "Muestra medica creada exitosamente"})
    async create(@Body() createSampleDto: CreateSampleDto){
        return this.samplesService.create(createSampleDto)
    }

    @Get()
    @ApiOperation({summary: "Obtener el detalle de una muestra medica"})
    async findAll(){
        return this.samplesService.findAll()
    }

    @Get(":id")
    @ApiOperation({summary: "Obtener el detalle de una muestra medica"})
    @ApiResponse({status: 404, description: "Muestra medica no encontrada"})
    async findOne(@Param('id') id: string){
        return this.samplesService.findOne(id)
    }

    @Put(':id')
    @ApiOperation({summary: "Actualizar una muestra medica"})
    @ApiResponse({status: 404, description: "Muestra Medica no encontrada"})
    async update(@Param('id') id: string, @Body()updateSampleDto: UpdateSampleDto){
        return this.samplesService.update(id, updateSampleDto)
    }

    @Delete(':id')
    @ApiOperation({summary: "Elimina una muestra medica"})
    @ApiResponse({status: 404, description: "Muestra medica no encontrada"})
    async remove (@Param('id') id: string) {
        return this.samplesService.remove(id)
    }

}