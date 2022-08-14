import { DataSource } from 'typeorm';
import { Commits } from '../entities/commits.entity';

export const CommitsProviders = [
  {
    provide: 'COMMIT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Commits),
    inject: ['DATA_SOURCE'],
  },
];
