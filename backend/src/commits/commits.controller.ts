import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import { Users } from 'src/users/entities/users.entity';
import { CommitsService } from './commits.service';
import { CreateCommitsDto } from './dto/commits-create.dto';
import { Commits } from './entities/commits.entity';

@Controller('commits')
export class CommitsController {
  constructor(private readonly commitsService: CommitsService) {}

  @ApiOperation({
    summary: '모든 커밋 불러오기 API',
    description: '모든 커밋을 불러온다',
  })
  @ApiCreatedResponse({ description: '모든 커밋 불러오기.', type: Commits })
  @Get()
  getAll(): Promise<Commits[]> {
    return this.commitsService.getAll();
  }
  @ApiOperation({
    summary: '해당하는 UserId의 커밋 불러오기 API',
    description: '해당하는 UserId의 커밋을 불러온다.',
  })
  @ApiCreatedResponse({
    description: '해당하는 UserId의 커밋 불러오기.',
    type: Commits,
  })
  @Get('/:id')
  getOne(@Param('id') id: string): Promise<Commits[]> {
    return this.commitsService.getOne(id);
  }
  @ApiOperation({ summary: '커밋 생성 API', description: '커밋을 생성한다.' })
  @ApiCreatedResponse({ description: '커밋 생성.', type: Commits })
  @Post()
  create(@Body() commitData: CreateCommitsDto) {
    return this.commitsService.create(commitData);
  }
}
