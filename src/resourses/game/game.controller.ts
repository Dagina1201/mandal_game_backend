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
import { ApiTags } from '@nestjs/swagger';
import { GameService } from './game.service';
import { GameDto } from './game.dto';

@Controller('game')
@ApiTags('Game')
// g 
export class GameController {
    constructor(private service: GameService) {

    }
    @Post()
    create(@Body() dto: GameDto, @Request() {user}) {
        return this.service.create(dto, user['_id'])
    }
}
