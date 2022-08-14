import { IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly userId: string;

  @IsString()
  readonly userName: string;

  @IsString()
  readonly userPassword: string;
}
