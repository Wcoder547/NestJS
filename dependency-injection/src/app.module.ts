import { Module } from '@nestjs/common';
import { UserStore } from './store/user.store';
import { UserController } from './user.controller';
import { Store } from './store/store';
import { config } from './config';

@Module({
  imports: [],
  controllers: [UserController],
  // providers: [{ provide: UserStore, useClass: UserStore }],
  // providers: [UserStore],
  //providers: [{ provide: 'STORE', useClass: UserStore }], //provide is the injection token, userclass is the implementation
  //providers: [{ provide: UserStore, useClass: Store }], //provide is the injection token, userclass is the implementation
  //providers: [UserStore, { provide: Store, useExisting: UserStore }], //provide is the injection token, userclass is the implementation
  // providers: [UserStore, { provide: Store, useClass: UserStore }],
  //providers: [{ provide: 'DATABASE_NAME', useValue: 'my_database' }],
  providers: [
    { provide: 'MAIL', useValue: ['example@mail.com', '<password>'] },
    { provide: config, useValue: { type: 'development', node: '17' } },
  ],

  //provide is the injection token, userclass is the implementation
}) //injection token is UserStore, and the implementation is UserStore
//provide instance is UserStore in the IOC container
export class AppModule {}
