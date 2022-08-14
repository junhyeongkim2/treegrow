import { IsDate, IsDateString, IsNumber, IsString } from 'class-validator';

export class createCommitsDto {
  @IsString()
  readonly userId: string;

  @IsString()
  readonly commitMessage: string;
}
