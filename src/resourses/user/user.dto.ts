import { ApiProperty } from '@nestjs/swagger';
// import { UserTypes } from 'src/utils/enum';
import { IsString } from 'class-validator';
export class UserDto {
  // @ApiProperty({ enum: UserTypes })
  // @IsEnum(UserTypes)
  // role: UserTypes;

  @ApiProperty()
  @IsString()
  username: string;
  @ApiProperty()

  lastname: string;
  @ApiProperty()

  firstname: string;
  @ApiProperty({ default: 'string' })
  @IsString()
  password: string;
}
export class LoginDto {


  @ApiProperty()
  // @IsString()
  username: string;
  @ApiProperty({ default: 'string' })
  // @IsString()
  password: string;
}
