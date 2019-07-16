import { Sequelize } from 'sequelize-typescript';
import { Cat } from '../cats/cat.entity';
import { config } from './database.config';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize(
                config[process.env.NODE_ENV || 'development']
            );
            sequelize.addModels([Cat]);
            await sequelize.sync();
            return sequelize;
        },
    },
];