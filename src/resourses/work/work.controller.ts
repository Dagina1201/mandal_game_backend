import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { WorkService } from './work.service';
import { WorkDto } from './work.dto';

@Controller('work')
@ApiTags("Work")
export class WorkController {
    constructor(private service: WorkService) {
        
    }

    @Post()
    create(@Body() dto: WorkDto) {
        return this.service.create(dto)
    }

    @Get()
    findAll() {
        return this.service.find()
    }
    @Get('start')
    start() {
        return this.service.start()
    }
}
