import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';

import { CommitsController } from './commits.controller';
import { CommitsService } from './commits.service';
import { CommitsProviders } from './providers/commits.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CommitsController],
  providers: [...CommitsProviders, CommitsService],
})
export class CommitsModule {}
