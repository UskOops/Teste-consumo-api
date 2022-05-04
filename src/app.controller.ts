import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() //passando o nome da rota
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() //Passando o nome da rota
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('objeto')
  getObject(): any {
    return this.appService.getobject();
    
  }
}
