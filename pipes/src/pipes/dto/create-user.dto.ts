import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @Type(() => String) //it will must convert it to string
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;
}
