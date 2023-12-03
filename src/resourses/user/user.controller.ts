import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';

import { UserService } from './user.service';
import { UserDto } from './user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags("User")
@UseGuards(AuthGuard)
export class UserController {
  constructor(private service: UserService) {}

  @Get()

  findAll() {
    return this.service.findAll();
  }

  @Get('me') 
  findMe(@Request() {user}) {
    return user
  }

  @Get(':username')
  findOne(@Param('username') username: string) {
    return this.service.findOne(username);
  }

  @Put()
  updateOne(@Request() { user }, @Body() dto: UserDto) {
    return this.service.updateOne(user, dto);
  }

  @Delete('me')
  deleteById(@Request() { user }) {
    return this.service.deleteMe(user['_id']);
  }



  @Delete()
  deleteMany() {
    return this.service.deleteMany();
  }
}
