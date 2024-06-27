import { Controller, Get, Query,Headers } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async apiMock(@Query() query:any): Promise<any> {
    return await this.appService.apiMock(query);
  }
  @Get("/fromEnv")
  async apiMockEnv(): Promise<any> {
    return await this.appService.apiMockEnv();
  }
}
