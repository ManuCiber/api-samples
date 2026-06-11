import { PartialType } from "@nestjs/swagger";
import { CreateSampleDto } from "./create-sample";

export class UpdateSampleDto extends PartialType(CreateSampleDto){}