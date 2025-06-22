import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  createUser(@Body() createUserDto: createUserDto) {
    console.log('Creating user with data:', createUserDto);
    return this.userService.addUser(createUserDto);
  }

  @Get()
  findAllUsers() {
    console.log('Fetching all users');
    return this.userService.findAllUsers();
  }

  @Get(':id')
  findUser(@Param('id') id: string) {
    const userId = parseInt(id);
    console.log(`Finding user with ID ${userId}`);
    return this.userService.findUser(userId);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: createUserDto) {
    const userId = parseInt(id);
    console.log(`Updating user with ID ${userId} and data:`, updateUserDto);
    return this.userService.updateUser(userId, updateUserDto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    const userId = parseInt(id);
    console.log(`Deleting user with ID ${userId}`);
    return this.userService.deleteUser(userId);
  }
}
