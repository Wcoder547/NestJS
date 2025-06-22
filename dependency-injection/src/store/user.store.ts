import { Injectable, Scope } from '@nestjs/common';

interface User {
  name: string;
  age: number;
  id: number;
}
// @Injectable({ scope: Scope.DEFAULT })
// @Injectable({ scope: Scope.REQUEST })
@Injectable({ scope: Scope.TRANSIENT })
export class UserStore {
  private store = new Map<number, User>();

  constructor() {
    console.log('✅ Store initialized');
  }
  addUser(user: User): void {
    this.store.set(user.id, user);
  }
  getUser(id: number): User | undefined {
    return this.store.get(id);
  }
  getUsers() {
    return Array.from(this.store).values();
  }
  updateUser(id: number, user: User): void {
    this.store.set(id, user);
  }
  deleteUser(id: number): void {
    this.store.delete(id);
  }
}
