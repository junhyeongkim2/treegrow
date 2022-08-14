import { Controller, Get, Post } from '@nestjs/common';
import { Users } from './entities/users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll(): Promise<Users[]> {
    return this.usersService.getAll();
  }
}
