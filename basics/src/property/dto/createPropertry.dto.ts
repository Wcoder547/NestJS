import { isInt, isString } from 'class-validator';

export class createPropertyDto {
  @isString()
  name: string;
  @isString()
  description: string;
  @isInt()
  area: number;
}
