import { Controller, Get, Body, Post, Param, UseGuards } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { ActionService } from './action.service';
import { ActionDto } from './action.dto';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('action')
@ApiTags("Action")
// @UseGuards(AuthGuard)
export class ActionController {
    constructor(private service: ActionService) {

    }


    @Post()
    create(@Body() dto: ActionDto) {
        return this.service.create(dto)
    }


    @Get()
    find() {
        return this.service.find()
    }

    @Get("get/:id")
    @ApiParam({ name: 'id' })
    findById(@Param('id') id: string) {
        return this.service.findById(id)
    }

    @Get('random')
    random() {
        return this.service.random()
    }
}
