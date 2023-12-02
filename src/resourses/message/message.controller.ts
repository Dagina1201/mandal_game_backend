import { Controller, Post, Get, Body } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageDto } from './message.dto';

@Controller('message')
export class MessageController {
    constructor(private service: MessageService) {
        
    }
    @Post()
    create(@Body() dto: MessageDto) {
        return this.service.create(dto)
    }
}
