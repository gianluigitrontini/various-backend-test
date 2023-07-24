import { EntityManager } from '@mikro-orm/sqlite';
import { Injectable } from '@nestjs/common';
import { User } from 'src/user/entities/user';

@Injectable()
export class UserService {

    constructor(
        private entityManager: EntityManager
    ) { }

    public getUsers() {
        return this.entityManager.find(User, {})
    }

    public async createUser({ name, email }) {
        const user = new User(name, email);
        await this.entityManager.persistAndFlush(user);
        return user;
    }
}
