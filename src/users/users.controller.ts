import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';


@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post('register')
    async register(@Body('email') email: string, @Body('password') password: string, @Body('username') username: string): Promise<User> {
        return this.usersService.register(email, password, username);
    }

    @Post('login')
    async login(@Body('email') email: string, @Body('password') password: string): Promise<{ message: string }> {
        const user = await this.usersService.findOneByEmail(email);
        if (!user) {
            throw new Error('Usuario no encontrado');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password_hash);
        if (!isPasswordValid) {
            throw new Error('Contraseña incorrecta');
        }

        return { message: 'Login exitoso' };
    }
}
