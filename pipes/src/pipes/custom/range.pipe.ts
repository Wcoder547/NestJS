import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class RangePipe implements PipeTransform {
  constructor(
    private min: number,
    private max: number,
  ) {}

  transform(value: string): number {
    const number = parseInt(value, 10);
    if (isNaN(number)) {
      throw new BadRequestException('Value must be a number');
    }
    if (number < this.min || number > this.max) {
      throw new BadRequestException(
        `Number must be between ${this.min} and ${this.max}`,
      );
    }
    return number;
  }
}
