import { Controller, Inject, Optional } from '@nestjs/common';
import { UserStore } from './store/user.store';
import { Store } from './store/store';
import { config } from './config';

@Controller('/users')
export class UserController {
  //   constructor(@Inject(UserStore) private store: UserStore) {
  //     console.log(this.store);
  //   }
  //   constructor(@Optional() private store: UserStore) {
  //     console.log(this.store);
  //   }
  // constructor(private store: Store) {
  //   console.log('waseem malik');
  //   console.log(this.store);
  // }
  // constructor(@Inject('ENV_CONFIG') private config: Record<string, any>) {
  //   console.log('waseem malik');
  //   console.log(this.config); //[ 'example@mail.com', '<password>' ]
  // }
  constructor(private config: config) {
    console.log('waseem malik');
    console.log(this.config); //[ 'example@mail.com', '<password>' ]
  }
  //   constructor(private store: UserStore) {
  //     console.log(this.store);
  //   }
}
