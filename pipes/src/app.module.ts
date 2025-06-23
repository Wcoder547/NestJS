import { Module } from '@nestjs/common';
import { PipesModule } from './pipes/pipes.module';
import { CustomPipeModule } from './pipes/custom/custom.pipe.module';
import { UserController } from './user.controller';

@Module({
  imports: [PipesModule, CustomPipeModule],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}
