import { Body, Controller, Get, Post, Put } from '@nestjs/common';

import { createUserDto } from './Dto/createuser.dto';
const USER: createUserDto[] = [];
@Controller('/like')
export class likeController {
  @Post('/add')
  addOneLike(@Body() createUserDto: createUserDto) {
    USER.push(createUserDto);
    console.log(USER);
    return 'success';
  }
  @Get('/all')
  getAllLikes() {
    console.log(USER);
    return USER;
  }
  @Put('/update')
  updateAllLikes(@Body() createUserDto: createUserDto) {
    USER.forEach((user) => {
      user.name = createUserDto.name;
      user.age = createUserDto.age;
      user.id = createUserDto.id;
    });
    console.log(USER);
    return USER;
  }
  @Post('/delete')
  deleteAllLikes() {
    USER.length = 0;
    console.log(USER);
    return USER;
  }
  @Get('/count')
  getCountLikes() {
    console.log(USER.length);
    return USER.length;
  }
}
