import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsISO8601 } from 'class-validator';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Timestamp,
} from 'typeorm';

@Entity()
export class Users {
  @ApiProperty({ description: 'userId' })
  @PrimaryColumn({ type: 'varchar', length: 10, comment: 'userId' })
  userId: string;
  @ApiProperty({ description: 'userName' })
  @Column({ type: 'varchar', length: 255, comment: 'userName' })
  userName: string;
  @ApiProperty({ description: 'userPassword' })
  @Column({ type: 'varchar', length: 255, comment: 'userPassword' })
  userPassword: string;
  @ApiProperty({ description: 'created_at' })
  @CreateDateColumn()
  created_at: Date;
  @ApiProperty({ description: 'updated_at' })
  @UpdateDateColumn()
  updated_at: Date;
}
