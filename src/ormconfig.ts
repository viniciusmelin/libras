import { ConnectionOptions } from 'typeorm';

export default {
  type: 'postgres',
  url: process.env.POSTGRES_URL,
  entities: ['src/lib/infrastructure/orm/typeorm/models/*.ts'],
  cli: {
    migrationsDir: 'src/migration',
  },
} as ConnectionOptions;
