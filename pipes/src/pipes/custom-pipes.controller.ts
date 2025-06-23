import { Controller, Get, Param } from '@nestjs/common';
import { CapitalizePipe } from '../pipes/custom/capitalize.pipe';
import { RangePipe } from './custom/range.pipe';

@Controller('custom-pipes')
export class CustomPipesController {
  @Get('capitalize/:text')
  capitalize(@Param('text', CapitalizePipe) text: string) {
    return { transformed: text };
  }

  @Get('range/:value')
  checkRange(@Param('value', new RangePipe(10, 100)) value: number) {
    return { number: value };
  }
}
