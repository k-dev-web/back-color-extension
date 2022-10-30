import { Users } from './user.entity';

export const usersProviders = [
    {
        provide: 'users',
        useValue: Users,
    },
];
