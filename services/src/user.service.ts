import { Injectable } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';

// If createUserDto includes 'id', you can use it as User type.
// Otherwise, define an interface like this:
type User = createUserDto;

@Injectable()
export class UserService {
  private store = new Map<number, User>();

  addUser(user: createUserDto) {
    this.store.set(user.id, user);
    return { message: 'USER_ADDED!' };
  }

  findAllUsers() {
    return Array.from(this.store.values());
  }

  findUser(id: number) {
    return this.store.get(id);
  }

  updateUser(id: number, updatedUser: createUserDto) {
    if (this.store.has(id)) {
      this.store.set(id, updatedUser);
      return { message: 'USER_UPDATED!' };
    }
    return { message: 'USER_NOT_FOUND!' };
  }

  deleteUser(id: number) {
    if (this.store.has(id)) {
      this.store.delete(id);
      return { message: 'USER_DELETED!' };
    }
    return { message: 'USER_NOT_FOUND!' };
  }
}
