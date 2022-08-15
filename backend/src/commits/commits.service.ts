import { InjectQueue } from '@nestjs/bull';
import { Inject, Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { Repository } from 'typeorm';
import { CreateCommitsDto } from './dto/commits-create.dto';
import { Commits } from './entities/commits.entity';

@Injectable()
export class CommitsService {
  constructor(
    @Inject('COMMIT_REPOSITORY')
    private commitsRepository: Repository<Commits>,
    @InjectQueue('commits') private commitsQueue: Queue,
  ) {}

  async getAll(): Promise<Commits[]> {
    return this.commitsRepository.find();
  }

  async getOne(userId: string): Promise<Commits[]> {
    return await this.commitsRepository.findBy({ userId });
  }

  async create(commitData: CreateCommitsDto) {
    const job = await this.commitsQueue.add('transcode', {
      savecommit: commitData,
    });
    return job;
  }
}
