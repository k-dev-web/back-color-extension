import { Injectable, Inject } from '@nestjs/common';

import { Users } from './user.entity';
import { UsersDto } from './dto/user.dto';
@Injectable()
export class UsersService {
    constructor(@Inject('users') private readonly userRepository: typeof Users) { }

    async create(user: UsersDto): Promise<Users> {
        return await this.userRepository.create<Users>(user);
    }

    async findOne(login: string): Promise<Users> {
        return  await this.userRepository.findOne<Users>({ where: { login } });

    }

    async findOneById(id: number): Promise<Users> {
        return await this.userRepository.findOne<Users>({ where: { id } });
    }
}
