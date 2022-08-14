import { IsNumber, isString, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  readonly userId: number;

  @IsString()
  readonly userName: string;

  @IsString()
  readonly userPassword: string;
}
