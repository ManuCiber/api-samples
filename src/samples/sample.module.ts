import { Module } from "@nestjs/common";
import { SamplesService } from './samples.service';
import { SampleController } from "./sample.controller";

@Module({
    controllers: [SampleController],
    providers: [SamplesService],
    exports: [SamplesService]
})

export class SampleModule {}