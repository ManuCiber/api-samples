import { Module } from '@nestjs/common';
import { InventoryLogsModule } from './inventory-logs/inventory-logs/inventory-logs.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
imports: [PrismaModule, InventoryLogsModule],
})
export class AppModule {}
