// ✅ Core NestJS decorator to mark this class as injectable (available in DI container)
import { Injectable, Scope } from '@nestjs/common';

/**
 * 👤 User Interface
 * Defines the shape of a user object.
 */
interface User {
  name: string;
  age: number;
  id: number;
}

/**
 * 🧠 UserStore Service
 * This service is registered with NestJS's Dependency Injection (DI) system.
 *
 * ✅ Scope.TRANSIENT:
 * - A new instance of this service is created every time it's injected.
 * - Useful for stateless or isolated operations.
 *
 * Other scopes:
 * - Scope.DEFAULT (singleton, default behavior)
 * - Scope.REQUEST (new instance per HTTP request)
 */
@Injectable({ scope: Scope.TRANSIENT })
export class UserStore {
  /**
   * 🗃️ Internal in-memory store to hold user data.
   * Map key: user ID, value: User object.
   */
  private store = new Map<number, User>();

  /**
   * 🚀 Constructor
   * Called every time this service is instantiated.
   * Logs to confirm creation (especially helpful with transient/request scopes).
   */
  constructor() {
    console.log('✅ Store initialized');
  }

  /**
   * ➕ Add a new user to the store
   * @param user - A user object to store
   */
  addUser(user: User): void {
    this.store.set(user.id, user);
  }

  /**
   * 🔍 Retrieve a user by their ID
   * @param id - The user ID
   * @returns User object or undefined if not found
   */
  getUser(id: number): User | undefined {
    return this.store.get(id);
  }

  /**
   * 📜 Get all users in the store
   * @returns An iterator over all user values
   */
  getUsers() {
    return Array.from(this.store).values();
  }

  /**
   * 🔄 Update an existing user by ID
   * @param id - The user ID
   * @param user - New user object to replace existing
   */
  updateUser(id: number, user: User): void {
    this.store.set(id, user);
  }

  /**
   * ❌ Delete a user from the store by ID
   * @param id - The user ID to delete
   */
  deleteUser(id: number): void {
    this.store.delete(id);
  }
}
