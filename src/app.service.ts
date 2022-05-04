import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getobject(): any {
    let obj = {
     id: 1,
     name: 'marco',
     email: 'marcolopesdias@outlook.com'
    }
    return obj;
  }
}
