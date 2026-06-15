import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString, Min } from "class-validator";

export class CreateVisitorDto{
 
    @ApiProperty({example: "Dr. Carlos Mendoza", description: "Nombre completo del visitador medico"})
    @IsString()
    @IsNotEmpty({message: "El nombre es requerido"})
    nombre!: string;

    @ApiProperty({example: "Zona Norte / Coorporativa", description: "Nombre completo del visitador medico"})
    @IsString()
    @IsNotEmpty({message: "La zona es requerida"})
    zona!: string;

    @ApiProperty({example: 0, description: "Numero inicial de muestras asignadas a este visitador"})
    @IsInt({message: "Las muestras asginadas deben ser un numero entero"})
    @Min(0,{message: "El numero de muestras asignadas no puede ser negativo"})
    muestras_asignadas!: number
}
