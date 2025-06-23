import { PipeTransform, Injectable } from '@nestjs/common';

@Injectable()
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    if (typeof value !== 'string') {
      throw new Error('Value must be a string');
    }
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
}
