import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from '../user/user.dto';
import { Messages } from 'src/utils/strings';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) { }
  async signIn(dto: UserDto) {
    let message = "Амжилттай нэвтэрлээ"
    let user = await this.usersService.findOne(dto.username);
    if (!user) {
      user = await this.usersService.create(dto);
      message = "Амжилттай бүргүүллээ"
    }
    if (user?.password !== dto.password) {
      return {
        message: 'Нууц үг буруу байна',
        success: false
      };
    }

    const payload = { username: user.username };
    return {
      success: true,
      message: message,
      access_token: await this.jwtService.signAsync(payload),
    };
  }
  async signUp(dto: UserDto) {
    const user = await this.usersService.create(dto);
    if (!user) {
      throw new HttpException(
        Messages.warningRegistering,
        HttpStatus.BAD_REQUEST,
      );
    }
    const payload = { username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
