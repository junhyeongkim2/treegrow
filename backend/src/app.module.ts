import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CommitsModule } from './commits/commits.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [UsersModule, CommitsModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
