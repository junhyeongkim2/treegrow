import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/users-create.dto';
import { Users } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<Users>,
  ) {}

  async getAll(): Promise<Users[]> {
    return this.userRepository.find();
  }

  async getOne(userId: string): Promise<Users> {
    return this.userRepository.findOneBy({ userId });
  }

  async create(userData: CreateUserDto): Promise<Users> {
    return this.userRepository.save(userData);
  }
}
