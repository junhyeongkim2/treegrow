import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UserProviders } from './providers/users.providers';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [...UserProviders, UsersService],
})
export class UsersModule {}
