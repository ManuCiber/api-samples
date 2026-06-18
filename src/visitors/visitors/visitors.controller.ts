import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { VisitorsService } from './visitors.service';
import { CreateVisitorDto } from './dto/create-visitor.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UpdateVisitorDto } from './dto/update-visitor.dto';

@Controller('visitors')
export class VisitorsController {
    constructor(private readonly visitorService: VisitorsService){}


    @Post()
    @ApiOperation({summary: "Register a new Visitor"})
    @ApiResponse({status: 201, description: "Visitor registered Successfully"})
    async create(@Body() createVisitorDto: CreateVisitorDto){
        return this.visitorService.create(createVisitorDto)
    }

    @Get()
    @ApiOperation({summary: "List All Visitors"})
    async findAll(){
        return this.visitorService.findAll()
    }


    @Get(':id')
    @ApiOperation({summary: "Get Details a Visitor"})
    @ApiResponse({status: 404, description: "Visitor not found"})
    async findOne(@Param() id: string){
        return this.visitorService.findOne(id)
    }

    @Patch(':id')
    @Put(':id')
    @ApiOperation({summary: "Update data to Visitor"})
    @ApiResponse({status: 404, description: "Visitor not found"})
    async update(@Param() id: string, @Body() updateVisitorDto: UpdateVisitorDto){
        return this.visitorService.update(id, updateVisitorDto)
    }

    @Delete(':id')
    async remove(@Param('id') id: string){
        return this.visitorService.remove(id)
    }

}
