import { Controller, Get } from '@nestjs/common';

@Controller('/*')
export class PagenotfoundController {
  @Get()
  getpaynotefound() {
    return ' <h1>this is Not Found</h1>';
  }
}
