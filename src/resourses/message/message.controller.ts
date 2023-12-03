import { Controller, Post, Get, Body, Param, UseGuards } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageDto } from './message.dto';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { AgeTypes } from 'src/utils/enum';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('message')
@ApiTags('Message')
@UseGuards(AuthGuard)
export class MessageController {
    constructor(private service: MessageService) {
        
    }
    @Post()
    create(@Body() dto: MessageDto) {
        return this.service.create(dto)
    }

    @Get(":age")
    @ApiParam({name: 'age'})
    findAge(@Param('age') age: AgeTypes) {
        return this.service.findAge(age)
    }
}
