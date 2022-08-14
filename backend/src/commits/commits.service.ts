import { Inject, Injectable } from '@nestjs/common';
import { Equal, Like, Repository } from 'typeorm';
import { createCommitsDto } from './dto/commits-create.dto';
import { Commits } from './entities/commits.entity';

@Injectable()
export class CommitsService {
  constructor(
    @Inject('COMMIT_REPOSITORY')
    private commitsRepository: Repository<Commits>,
  ) {}

  async getAll(): Promise<Commits[]> {
    return this.commitsRepository.find();
  }

  async getOne(userId: string): Promise<Commits[]> {
    return await this.commitsRepository.findBy({ userId });
  }

  async create(commitData: createCommitsDto): Promise<Commits> {
    return this.commitsRepository.save(commitData);
  }
}
