import { Global, Module } from '@nestjs/common';
import { UserController } from './controllers/UserController';
import { AccountController } from './controllers/AccountController';
import { UserService } from './services/user.service';
@Global() //Global module
@Module({
  imports: [],
  controllers: [UserController, AccountController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
