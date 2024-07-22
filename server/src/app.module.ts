import { Module } from '@nestjs/common';

import { CheckHealthController } from './check-health/check-health.controller';

@Module({
  imports: [],
  controllers: [CheckHealthController],
  providers: [],
})
export class AppModule {}
