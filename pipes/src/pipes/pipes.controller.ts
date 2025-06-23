import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseArrayPipe,
  ParseBoolPipe,
  ParseEnumPipe,
  ParseFloatPipe,
  ParseIntPipe,
  ParseUUIDPipe,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Role } from './enums/role.enum';

@Controller('pipes')
export class PipesController {
  // @Post('create-user')
  // createUser(@Body(new ValidationPipe()) body: CreateUserDto) {
  //   return { message: 'User created', data: body };
  // }

  @Post('create-user')
  createUser(@Body(new ValidationPipe()) body: CreateUserDto) {
    return {
      message: 'user created',
      data: body,
    };
  }

  @Get('int/:id')
  getInt(@Param('id', ParseIntPipe) id: number) {
    return { id };
  }

  @Get('float/:amount')
  getFloat(@Param('amount', ParseFloatPipe) amount: number) {
    return { amount };
  }

  @Get('bool/:status')
  getBool(@Param('status', ParseBoolPipe) status: boolean) {
    return { status };
  }

  @Get('tags')
  getTags(
    @Query('tags', new ParseArrayPipe({ items: String, separator: ',' }))
    tags: string[],
  ) {
    return { tags };
  }

  @Get('role/:role')
  getRole(@Param('role', new ParseEnumPipe(Role)) role: Role) {
    return { role };
  }

  @Get('page')
  getPage(@Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number) {
    return { page };
  }

  @Get('uuid/:id')
  getUUID(@Param('id', new ParseUUIDPipe()) id: string) {
    return { uuid: id };
  }
}

// Test using Postman or browser:

//     POST http://localhost:3000/pipes/create-user
//     Body:

// {
//   "name": "John",
//   "email": "john@example.com"
// }

// GET http://localhost:3000/pipes/int/5

// GET http://localhost:3000/pipes/float/3.14

// GET http://localhost:3000/pipes/bool/true

// GET http://localhost:3000/pipes/tags?tags=a,b,c

// GET http://localhost:3000/pipes/role/admin

// GET http://localhost:3000/pipes/page

// GET http://localhost:3000/pipes/uuid/123e4567-e89b-12d3-a456-426614174000
