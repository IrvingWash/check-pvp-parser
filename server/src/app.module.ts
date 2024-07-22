import { Module } from '@nestjs/common';

import { CheckHealthController } from './check-health/check-health.controller';
import { CheckPvpTableService } from './check-pvp-table/check-pvp-table.service';
import { CheckPvpTableController } from './check-pvp-table/check-pvp-table.controller';

@Module({
  imports: [],
  controllers: [CheckHealthController, CheckPvpTableController],
  providers: [CheckPvpTableService],
})
export class AppModule {}
