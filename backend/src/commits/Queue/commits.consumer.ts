import { InjectQueue, Process, Processor } from '@nestjs/bull';
import { Inject, Injectable } from '@nestjs/common';
import { Job, Queue } from 'bull';
import { create } from 'domain';
import { async } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateCommitsDto } from '../dto/commits-create.dto';
import { Commits } from '../entities/commits.entity';
//import { MyLogger } from 'src/logger/logger.serivce';

@Injectable()
@Processor('commits')
export class CommitsConsumer {
  constructor(
    @Inject('COMMIT_REPOSITORY')
    private commitsRepository: Repository<Commits>,
  ) {}

  @Process('createCommit')
  async handleTranscode(job: Job) {
    //this.logger.debug('Start transcoding...');
    //this.logger.debug(job.data);
    //this.logger.debug('Transcoding completed');

    console.log('createing commit...');

    console.log(job.data);

    this.commitsRepository.save(job.data.savecommit);

    console.log('create commit completed');
  }
}
