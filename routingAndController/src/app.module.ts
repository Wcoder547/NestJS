import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { VideoController } from './video.controller';
import { bodyController } from './body.controller';
import { likeController } from './like.controller';

@Module({
  imports: [],
  controllers: [
    UserController,
    VideoController,
    bodyController,
    likeController,
  ],
  providers: [],
})
export class AppModule {}
