import { Module } from '@nestjs/common';
import { InventoryLogsModule } from './inventory-logs/inventory-logs/inventory-logs.module';
import { PrismaModule } from './prisma/prisma.module';
import { DeliveriesModule } from './deliveries/deliveries/deliveries.module';
import { SampleModule } from './samples/samples/sample.module';
import { VisitorsModule } from './visitors/visitors/visitors.module';

@Module({
imports: [PrismaModule, InventoryLogsModule,SampleModule, DeliveriesModule, VisitorsModule],
})
export class AppModule {}
