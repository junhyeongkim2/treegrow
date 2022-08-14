import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { createCommitsDto } from './dto/commits-create.dto';
import { Commits } from './entities/commits.entity';

@Controller('commits')
export class CommitsController {
  constructor(private readonly commitsService: CommitsService) {}

  @Get()
  getAll(): Promise<Commits[]> {
    return this.commitsService.getAll();
  }
  @Get('/:id')
  getOne(@Param('id') id: string): Promise<Commits[]> {
    return this.commitsService.getOne(id);
  }

  @Post()
  create(@Body() commitData: createCommitsDto) {
    return this.commitsService.create(commitData);
  }
}
