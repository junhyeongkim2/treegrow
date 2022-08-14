import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsDateString, IsNumber, IsString } from 'class-validator';

export class createCommitsDto {
  @ApiProperty({ description: 'userId' })
  @IsString()
  readonly userId: string;
  @ApiProperty({ description: 'commitMessage' })
  @IsString()
  readonly commitMessage: string;
}
