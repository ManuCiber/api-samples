import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateVisitorDto } from './dto/create-visitor.dto';
import { UpdateVisitorDto } from './dto/update-visitor.dto';

@Injectable()
export class VisitorsService {
    constructor(private prisma: PrismaService){}

    async create(createVisitorDto: CreateVisitorDto){
        const visitor = await this.prisma.visitador.create({
            data: createVisitorDto,
        })
        return {
            success: true,
            data: visitor
        }
    }

    async findAll(){
        const visitors = this.prisma.visitador.findMany({
            orderBy: {created_at: 'desc'},
        })
        return {success: true, data: visitors}
    }

    async findOne(id: string){
        const visitor = await this.prisma.visitador.findUnique({
            where:{id},
            include:{
                entregas: true
            }
        })
        if(!visitor){
            throw new NotFoundException(`Visitor with ID ${id} not found`)
        }
    }

    async update(id: string, updateVisitorDto: UpdateVisitorDto){
        const existing = await this.prisma.visitador.findUnique({
            where: {id}
        })
        if(!existing){
            throw new NotFoundException(`Visitor with ID ${id} not found`)
        }

        const updatedVisitor = await this.prisma.visitador.update({
            where: {
                id
            }, data: updateVisitorDto
        })

        return {
            success: true,
            message: "Visitor updated successfully",
            data: updatedVisitor
        }
    }

    async remove(id: string) {
        const existing = await this.prisma.visitador.findUnique({
            where: {id}
        })

        if(!existing){
            throw new NotFoundException(`Visitor with ID ${id} not found`)
        }

        await this.prisma.visitador.delete({
            where: {id}
        })

        return {
            success: true,
            message: `Visitor ${existing.nombre} deleted successfully`
        }
    }

}
