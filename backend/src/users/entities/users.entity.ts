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
  @PrimaryColumn({ type: 'varchar', length: 10, comment: 'userId' })
  userId: string;

  @Column({ type: 'varchar', length: 255, comment: 'userName' })
  userName: string;

  @Column({ type: 'varchar', length: 255, comment: 'userPassword' })
  userPassword: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
