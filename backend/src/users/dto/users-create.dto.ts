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
  @IsString()
  readonly userId: string;

  @IsString()
  readonly userName: string;

  @IsString()
  readonly userPassword: string;
}
