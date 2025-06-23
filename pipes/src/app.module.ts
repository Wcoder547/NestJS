import { Module } from '@nestjs/common';
import { PipesModule } from './pipes/pipes.module';
import { CustomPipeModule } from './pipes/custom/custom.pipe.module';

@Module({
  imports: [PipesModule, CustomPipeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
