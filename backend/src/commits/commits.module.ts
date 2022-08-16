import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';

import { CommitsController } from './commits.controller';
import { CommitsService } from './commits.service';
import { CommitsProviders } from './providers/commits.providers';
import { CommitsConsumer } from './Queue/commits.consumer';

@Module({
  imports: [
    DatabaseModule,
    BullModule.registerQueue({
      name: 'commits',
      redis: {
        host: 'redis-server',
        port: 6379,
      },
    }),
  ],
  controllers: [CommitsController],
  providers: [...CommitsProviders, CommitsService, CommitsConsumer],
})
export class CommitsModule {}
