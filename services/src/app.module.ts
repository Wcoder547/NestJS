import { Module } from '@nestjs/common';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [],
  providers: [UserService],
})
export class AppModule {}
