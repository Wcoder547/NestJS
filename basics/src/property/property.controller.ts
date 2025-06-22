import {
          Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { create } from 'domain';
import { createPropertyDto } from './dto/createPropertry.dto';

@Controller('property')
export class PropertyController {
  @Get()
  findAll(): string {
    return 'This action returns all properties';
  }
  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
    @Query('sort', ParseBoolPipe) sort: boolean,
  ): string {
    console.log(typeof id); // number
    console.log(typeof sort); // boolean
    return `This action returns a single property with id: ${id} and sort: ${sort}`;
  }
}


@Post()
create(@Body() body: createPropertyDto) {
  return body;
}