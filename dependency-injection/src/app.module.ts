import { Injectable, Module } from '@nestjs/common';

import { UserStore } from './store/user.store'; // Service for user-related logic
import { UserController } from './user.controller'; // Controller handling HTTP routes
import { Store } from './store/store'; // Abstract or base class/interface
import { config } from './config'; // App-level config (could be value/class)

import { BehaviorSubject, ReplaySubject } from 'rxjs';

const IS_DEV_MODE = false; // Ideally, this should come from process.env or config

/**
 * 🔧 A configuration service to hold the current environment type.
 * 📦 Registered as a provider below so it can be injected where needed.
 */
@Injectable()
class EnvConfig {
  envType: 'development' | 'stage' | 'production';
}

/**
 * 🚀 Main Application Module
 * 📦 Registers controllers and providers (services, values, factories, etc.)
 */
@Module({
  //  No other modules are being imported here
  imports: [],

  // 🌐 Registering controllers that handle incoming HTTP requests
  controllers: [UserController],

  // 💉 === PROVIDERS: Where Dependency Injection happens ===

  /**
   * ✅ STANDARD PROVIDER: Class-based provider for UserStore.
   * This will be automatically resolved by NestJS when injected.
   */
  providers: [UserStore],

  /**
   * 🧠 Alternate provider patterns (commented for experimentation or future usage)
   */

  // ✅ Using manual DI token with the same class
  // providers: [{ provide: UserStore, useClass: UserStore }],

  // 🧩 Custom token with class implementation (useful for interfaces)
  // providers: [{ provide: 'STORE', useClass: UserStore }],

  // 🔁 Override base class (Store) with actual implementation (UserStore)
  // providers: [{ provide: Store, useClass: UserStore }],

  // ♻️ Alias: Reuse an existing provider instance (not new instance)
  // providers: [UserStore, { provide: Store, useExisting: UserStore }],

  // 🏷️ VALUE PROVIDER: Injecting constants or config values
  // providers: [{ provide: 'DATABASE_NAME', useValue: 'my_database' }],

  // 🌐 MULTIPLE VALUE PROVIDERS: Injecting mail credentials and config object
  // providers: [
  //   { provide: 'MAIL', useValue: ['example@mail.com', '<password>'] },
  //   { provide: config, useValue: { type: 'development', node: '17' } },
  // ],

  /**
   * ⚙️ FACTORY PROVIDER: Creating a dynamic value based on condition
   * 🧪 Returns ReplaySubject in dev, otherwise BehaviorSubject
   * ✅ Useful for event-based services or stream buses
   */
  // providers: [
  //   {
  //     provide: 'EVENT_STORE',
  //     useFactory: (envConfig: EnvConfig, limit: number) => {
  //       const eventBus$ =
  //         envConfig.envType === 'development'
  //           ? new ReplaySubject(limit)
  //           : new BehaviorSubject(null);
  //       console.log('Event bus created with limit:', limit);
  //       return eventBus$;
  //     },
  //     inject: [EnvConfig, { token: 'LIMIT', optional: true }], // Custom tokens injected into factory
  //   },

  //   // Registering EnvConfig class so it can be injected above
  //   EnvConfig,

  //   // VALUE PROVIDER for 'LIMIT' token used in factory above
  //   {
  //     provide: 'LIMIT',
  //     useValue: 2,
  //   },
  // ],

  /**
   * 🌐 Async Factory Provider Example
   * 🔐 Can be used to create DB connections or perform async operations
   */
  // providers: [
  //   {
  //     provide: 'database_connection',
  //     useFactory: async () => {
  //       const socket = createConnection({ host: 'localhost', port: 3306 });
  //       return socket;
  //     },
  //     inject: [], // You can inject config/services here if needed
  //   },
  // ],
})
export class AppModule {} // 📦 This class bootstraps the entire application
