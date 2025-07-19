import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('NestFactory::', NestFactory);
  //   NestFactory:: NestFactoryStatic {
  //   logger: Logger {
  //     context: 'NestFactory',
  //     options: { timestamp: true },
  //     localInstanceRef: ConsoleLogger {
  //       options: [Object],
  //       inspectOptions: [Object],
  //       context: 'NestFactory',
  //       originalContext: 'NestFactory'
  //     }
  //   },
  //   abortOnError: true,
  //   autoFlushLogs: false
  // }
  // console.log('Application::', app);
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
