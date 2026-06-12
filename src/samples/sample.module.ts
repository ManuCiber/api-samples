import { Module } from "@nestjs/common";
import { SamplesService } from './samples.service';

@Module({
    controllers: [],
    providers: [SamplesService],
    exports: []
})

export class SampleModule {}