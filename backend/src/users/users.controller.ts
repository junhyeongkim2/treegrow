import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/users-create.dto';
import { Users } from './entities/users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll(): Promise<Users[]> {
    return this.usersService.getAll();
  }
  @Get('/:id')
  getOne(@Param('id') id: number): Promise<Users> {
    return this.usersService.getOne(id);
  }

  @Post()
  create(@Body() userData: CreateUserDto) {
    return this.usersService.create(userData);
  }
}
