import { Body, Controller, Post } from '@nestjs/common';

@Controller('/body')
export class bodyController {
  @Post('/one')
  addOneBody(@Body() requestData: Record<string, any>) {
    console.log(requestData);
    return 'success';
  }
}
