import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";

export class CreateDeliveryDto{
    @ApiProperty({example: 'sample', description: "UUID"})
    @IsString()
    @IsNotEmpty({message: "El ID de la muestra es requerido"})
    muestra_id!: string;
    
    @ApiProperty({example: 'sample', description: "UUID"})
    @IsString()
    @IsNotEmpty({message: "El ID del visitador es requerido"})
    visitador_id!: string


    @ApiProperty({example: 10, description: "Cantidad de muestras medicas entregadas"})
    @IsInt({message: "La cantidad debe ser un numero entero"})
    @Min(1, {message: "La cantidad a entregar debe ser al menos 1"})
    cantidad!: number;

    @ApiProperty({example: "2026-06-21", description: "Fecha de entrega", required: false})
    @IsString()
    @IsOptional()
    fecha?:string

    @ApiProperty({example: "2:20", description: "Hora de entrega", required: false})
    @IsString()
    @IsOptional()
    hora?: string

    @ApiProperty({example: "Entregado", description: "Estado de la entrega", required: false})
    @IsString()
    @IsOptional()
    estado?: string
}