import { Controller, Post, Get, UseGuards, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TalentService } from './talent.service';
import { TalentDto } from './talent.dto';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('talent')
@ApiTags("Talent")
// @UseGuards(AuthGuard)
export class TalentController {
    constructor(private service: TalentService) {

    }

    @Post()
    create(@Body() dto: TalentDto) {
        return this.service.create(dto)
    }

    @Get()
    find() {
        return this.service.find()
    }

}
