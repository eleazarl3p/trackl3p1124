import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/heap')
  memoryUsage(): object {
    return this.appService.getMemoryUsage();
  }

  @Get('heap/alocation')
  alocation() {
    return this.appService.getHeapStatistics();
  }
}
