import { Module } from '@nestjs/common';
import { InventoryLogsService } from './inventory-logs.service';
import { InventoryLogsController } from './inventory-logs.controller';

@Module({
  providers: [InventoryLogsService],
  controllers: [InventoryLogsController]
})
export class InventoryLogsModule {}
