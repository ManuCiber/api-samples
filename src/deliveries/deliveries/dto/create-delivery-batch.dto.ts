import { Type } from 'class-transformer';
import { ArrayMaxSize, ArrayMinSize, IsArray, IsInt, IsNotEmpty, IsString, Min, ValidateNested } from 'class-validator';

export class DeliveryBatchItemDto {
  @IsString()
  @IsNotEmpty()
  muestra_id!: string;

  @IsInt()
  @Min(1)
  cantidad!: number;
}

export class CreateDeliveryBatchDto {
  @IsString()
  @IsNotEmpty()
  visitador_id!: string;

  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(100)
  @ValidateNested({ each: true })
  @Type(() => DeliveryBatchItemDto)
  items!: DeliveryBatchItemDto[];
}
