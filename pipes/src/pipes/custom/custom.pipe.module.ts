import { Module } from '@nestjs/common';
import { CustomPipesController } from '../custom-pipes.controller';
import { CapitalizePipe } from './capitalize.pipe';

@Module({
  controllers: [CustomPipesController],
  providers: [CapitalizePipe],
})
export class CustomPipeModule {}
