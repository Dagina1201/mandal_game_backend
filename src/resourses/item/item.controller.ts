import {   Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Request,
    UseGuards, } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ItemService } from './item.service';
import { ItemDto } from './item.dto';

@Controller('item')
@ApiTags('Item')

export class ItemController {
    constructor(private service: ItemService) {
        
    }



    @Post()
    create(@Body() dto: ItemDto) {
        return this.service.create(dto)
    }

    

}
