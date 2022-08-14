import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsDateString,
  IsNumber,
  IsString,
  IS_DATE,
} from 'class-validator';
import { Timestamp } from 'typeorm';
import { isDate } from 'util/types';

export class CreateUserDto {
  @ApiProperty({ description: 'userId' })
  @IsString()
  readonly userId: string;
  @ApiProperty({ description: 'userName' })
  @IsString()
  readonly userName: string;
  @ApiProperty({ description: 'userPassword' })
  @IsString()
  readonly userPassword: string;
}
