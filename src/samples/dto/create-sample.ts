import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString, Min } from "class-validator";

export class CreateSampleDto {
    @ApiProperty({example: "Producto A", description:"Nombre de la muestra"})
    @IsString()
    @IsNotEmpty({message: "The name field is required"})
    nombre: string | undefined;

    @ApiProperty({example: "150", description: "Cantidad inicial en inventario"})
    @IsInt()
    @Min(0, {message: "The existencias field must be a positive integer"})
    existencias: number | undefined;

    @ApiProperty({example: "10", description: "Umbral mínimo de existencias"})
    @IsInt()
    @Min(0, {message: "The umbral_minimo field must be a positive integer"})
    umbral_minimo: number | undefined;
}