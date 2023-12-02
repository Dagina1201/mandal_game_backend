import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class Detail {
  @ApiProperty({ required: true })
  @IsString()
  title: string;
  @ApiProperty()
  text: string;
}

export class GetDto {
  @ApiProperty({ type: Number, required: true, default: 5 })
  limit: number;
  @ApiProperty({ type: Number, required: true, default: 1 })
  page: number;
  @ApiProperty()
  startDate: string;
  @ApiProperty()
  endDate: string;
}
