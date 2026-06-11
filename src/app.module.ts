import { Module } from '@nestjs/common';
import { Module } from './inventory-logs/inventory-logs.module';
import { InventoryLogsModule } from './inventory-logs/inventory-logs/inventory-logs.module';
import { InventoryLogsService } from './inventory.logs/inventory-logs/inventory-logs.service';

@Module({
  imports: [Module, InventoryLogsModule],
  controllers: [],
  providers: [InventoryLogsService],
})
export class AppModule {}
