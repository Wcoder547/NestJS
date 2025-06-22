import {
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Post,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
@Controller('/users')
export class UserController {
  @Post('/profile')
  @Redirect('/users/account', 302)
  //   @Header('cache-control', 'none')
  //   @Header('X-name', 'waseem akram')
  @HttpCode(200)
  //@HttpCode(HttpStatus.OK)
  //@HttpCode(HttpStatus.NOT_FOUND)
  // in @Res({ passthrough: true }) it will automaticly return response
  getProfile(@Req() req: Request, @Res() res: Response) {
    //     console.log(req); //give me complete request
    //     res.json({
    //       hello: 'world',
    //     });
  }

  @Get('/account')
  redirectRoute() {
    return 'working account!!';
  }
}
