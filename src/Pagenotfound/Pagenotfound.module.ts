import { Module } from '@nestjs/common';
import { PagenotfoundController } from './Pagenotfound.controller';

@Module({
  controllers: [PagenotfoundController],
})
export class PageNotFound {}
