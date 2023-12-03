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
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { ItemService } from './item.service';
import { ItemDto } from './item.dto';
import { Genders, ItemTypes } from 'src/utils/enum';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('item')
@ApiTags('Item')
// @UseGuards(AuthGuard)
export class ItemController {
    constructor(private service: ItemService) {

    }



    @Post()
    create(@Body() dto: ItemDto) {
        return this.service.create(dto)
    }


    @Get("type/:type")
    @ApiParam({ name: 'type' })
    findType(@Param('type') type: ItemTypes) {
        return this.service.getType(type)
    }
    @Get("gender/:gender")
    @ApiParam({ name: 'gender' })
    findGender(@Param('gender') gender: Genders) {
        return this.service.findGender(gender)
    }

    @Get('get/:id')

    @ApiParam({ name: 'id' })
    findId(@Param('id') id: string) {
        return this.service.findById(id)
    }

}
