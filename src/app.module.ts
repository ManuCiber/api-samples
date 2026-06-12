import { Module } from '@nestjs/common';
import { InventoryLogsModule } from './inventory-logs/inventory-logs/inventory-logs.module';
import { PrismaModule } from './prisma/prisma.module';
import { SampleModule } from './samples/sample.module';

@Module({
imports: [PrismaModule, InventoryLogsModule,SampleModule],
})
export class AppModule {}
