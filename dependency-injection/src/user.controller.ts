// ✅ Importing core decorators and tools from NestJS
import { Controller, Get, Inject, Optional } from '@nestjs/common';

// ✅ Importing UserStore - a service responsible for user-related data or logic
import { UserStore } from './store/user.store';

// ✅ Importing abstract Store interface or base class (if applicable)
import { Store } from './store/store';

// ✅ Importing config object or class for application-level configuration
import { config } from './config';

// ✅ Importing RxJS Subject for event handling or reactive programming
import { Subject } from 'rxjs';

// ✅ Optional: Console import (not usually required unless you're customizing Console class)
import { Console } from 'console';

/**
 * 🧠 The UserController handles HTTP requests related to users.
 * ✅ It is mapped to the '/users' route.
 */
@Controller('/users')
export class UserController {
  /**
   * 🚀 Constructor Injection
   * ✅ Injects an instance of UserStore automatically by NestJS's IoC container.
   * ✅ This is standard class-based injection (no custom token required).
   *
   * Note: If UserStore is registered as a provider in AppModule, this will work seamlessly.
   */
  constructor(private store: UserStore) {
    console.log('✅ UserController initialized with UserStore:', this.store);
  }

  @Get()
  getUsers() {
    return '📄 Returning all users';
  }

  /**
   * 🧪 Alternate constructor examples (commented for reference)
   */

  // 🔄 Injecting by token (manual)
  // constructor(@Inject(UserStore) private store: UserStore) {
  //   console.log('Injected using token UserStore:', this.store);
  // }

  // ❓ Optional injection - allows this.store to be undefined if not provided
  // constructor(@Optional() private store: UserStore) {
  //   console.log('Optional UserStore:', this.store);
  // }

  // 🧩 Injecting abstract Store interface or base class
  // constructor(private store: Store) {
  //   console.log('Injected Store:', this.store);
  // }

  // 🌐 Injecting ENV_CONFIG object using custom token
  // constructor(@Inject('ENV_CONFIG') private config: Record<string, any>) {
  //   console.log('Injected ENV_CONFIG:', this.config);
  // }

  // 📡 Injecting event bus via custom provider (RxJS Subject)
  // constructor(@Inject('EVENT_STORE') private eventbus: Subject<any>) {
  //   console.log('Injected EVENT_STORE:', this.eventbus);
  // }

  // 🛠 Injecting a configuration class directly
  // constructor(private config: config) {
  //   console.log('Injected config class:', this.config);
  // }
}
