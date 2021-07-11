import { ConnectionOptions } from 'typeorm';

export default {
  type: 'postgres',
  url: process.env.POSTGRES_URL,
  entities: ['src/infrastructure/orm/typeorm/models/*.ts'],
  migrations: ['src/migration/*.ts'],
  cli: {
    migrationsDir: 'src/migration',
  },
} as ConnectionOptions;
