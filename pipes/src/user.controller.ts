import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserSchema } from './schemas/user.schema';
import { ZodValidationPipe } from './pipes/zod-validation.pipe';

@Controller('users')
export class UserController {
  @Post()
  createUser(@Body(new ZodValidationPipe(CreateUserSchema)) body: string[]) {
    return { user: body };
  }
}
