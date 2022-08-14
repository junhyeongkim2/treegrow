import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import { Commits } from 'src/commits/entities/commits.entity';
import { CreateUserDto } from './dto/users-create.dto';
import { Users } from './entities/users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({
    summary: '모든 유저 불러오기 API',
    description: '모든 유저를 불러온다',
  })
  @ApiCreatedResponse({ description: '모든 유저 불러오기.', type: Users })
  @Get()
  getAll(): Promise<Users[]> {
    return this.usersService.getAll();
  }

  @ApiOperation({
    summary: '해당하는 id 유저 불러오기 API',
    description: '해당하는 id 유저를 불러온다',
  })
  @ApiCreatedResponse({ description: '해당 유저 불러오기', type: Users })
  @Get('/:id')
  getOne(@Param('id') id: string): Promise<Users> {
    return this.usersService.getOne(id);
  }

  @ApiOperation({ summary: '유저 생성 API', description: '유저를 생성한다.' })
  @ApiCreatedResponse({ description: '유저 생성.', type: Users })
  @Post()
  create(@Body() userData: CreateUserDto) {
    return this.usersService.create(userData);
  }
}
