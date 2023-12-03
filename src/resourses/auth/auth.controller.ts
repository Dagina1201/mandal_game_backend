import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';

import { LoginDto, UserDto } from '../user/user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags("Auth")
export class AuthController {
  constructor(private authService: AuthService) { }
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: UserDto) {

    return this.authService.signIn(signInDto);
  }

  @Post('register')
  signUp(@Body() dto: UserDto) {
    return this.authService.signUp(dto)
  }

}
