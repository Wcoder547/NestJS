import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { VideoController } from './video.controller';
import { bodyController } from './body.controller';
import { likeController } from './like.controller';
import { RouterModule } from '@nestjs/core';

// const ROUTES = [
//   { path: 'jobs', module: jobsModule },
//   {
//     path: 'admin',
//     module: adminModule,
//     children: [{ path: 'users', module: usersModule }],
//   },
// ];
@Module({
  // imports: [RouterModule.register(ROUTES)],

  controllers: [
    UserController,
    VideoController,
    bodyController,
    likeController,
  ],
  providers: [],
})
export class AppModule {}
