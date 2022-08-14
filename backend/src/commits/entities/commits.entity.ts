import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Commits {
  @ApiProperty({ description: 'id' })
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty({ description: 'userId' })
  @Column()
  userId: string;
  @ApiProperty({ description: 'commitMessage' })
  @Column()
  commitMessage: string;
  @ApiProperty({ description: 'created_at' })
  @CreateDateColumn()
  created_at: Date;
  @ApiProperty({ description: 'updated_at' })
  @UpdateDateColumn()
  updated_at: Date;
}
