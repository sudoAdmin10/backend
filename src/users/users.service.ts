import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    async register(email: string, password: string, username: string): Promise<User> {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = this.usersRepository.create({ email, password_hash: hashedPassword, username });
        return this.usersRepository.save(user);
    }

    async findOneByEmail(email: string): Promise<User | null> {
        return this.usersRepository.findOneBy({ email });
    }
}
