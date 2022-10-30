import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService,
    ) { }

    async validateUser(login: string, pass: string) {
        const user = await this.userService.findOne(login);

        if (!user) {
            return null;
        }
        const match = await this.comparePassword(pass, user.hash);

        if (!match) {
            return null;
        }

        const { password, ...result } = user['dataValues'];
        return result;
    }

    public async login(user) {
        const token = await this.generateToken(user);
        return { token };
    }

    public async create(user) {
        const pass = await this.hashPassword(user.password);

        const newUser = await this.userService.create({ login:user.login, hash: pass });

        const { password, ...result } = newUser['dataValues'];

        const token = await this.generateToken(result);

        return {  token };
    }

    private async generateToken(user) {
        const token = await this.jwtService.signAsync(user);
        return token;
    }

    private async hashPassword(password) {
        const hash = await bcrypt.hash(password, 10);
        return hash;
    }

    private async comparePassword(enteredPassword, dbPassword) {
        const match = await bcrypt.compare(enteredPassword, dbPassword);
        return match;
    }
}
