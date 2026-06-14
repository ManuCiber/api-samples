import { Module } from '@nestjs/common';
import { InventoryLogsModule } from './inventory-logs/inventory-logs/inventory-logs.module';
import { PrismaModule } from './prisma/prisma.module';
import { SampleModule } from './samples/sample.module';
import { DeliveriesModule } from './deliveries/deliveries.module';

@Module({
imports: [PrismaModule, InventoryLogsModule,SampleModule, DeliveriesModule],
})
export class AppModule {}
