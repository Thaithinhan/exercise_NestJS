import { Controller, Get } from '@nestjs/common';

@Controller('/overview')
export class OverviewController {
  @Get()
  getOverview() {
    return 'this is Overview';
  }
}
