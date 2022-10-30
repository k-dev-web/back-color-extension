import { Sequelize } from 'sequelize-typescript';

import { databaseConfig } from './database.config';
import {Colors} from "../modules/colors/colors.entity";
import {Users} from "../modules/users/user.entity";

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            let config;
            switch (process.env.NODE_ENV) {
                default:
                    config = databaseConfig.db;
            }
            const sequelize = new Sequelize(config);
            sequelize.addModels([Users, Colors]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
