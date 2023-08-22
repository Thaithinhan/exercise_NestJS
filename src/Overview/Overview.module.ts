import { Module } from '@nestjs/common';
import { OverviewController } from './Overview.controller';

@Module({
  controllers: [OverviewController],
})
export class Overview {}
