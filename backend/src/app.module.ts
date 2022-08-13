import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { CommitsController } from './commits/commits.controller';
import { CommitsService } from './commits/commits.service';
import { CommitsModule } from './commits/commits.module';

@Module({
  imports: [UsersModule, CommitsModule],
  controllers: [AppController, UsersController, CommitsController],
  providers: [AppService, UsersService, CommitsService],
})
export class AppModule {}
