import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryColumn({ type: 'int', comment: 'userId' })
  userId: number;

  @Column({ type: 'varchar', length: 255, comment: 'userName' })
  userName: string;

  @Column({ type: 'varchar', length: 255, comment: 'userPassword' })
  userPassword: string;
}
