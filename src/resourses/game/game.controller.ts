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
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import { GameService } from './game.service';
import { GameDto, SavingDto } from './game.dto';
import { Decree, MissionTypes, SavingTypes } from 'src/utils/enum';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('game')
@ApiTags('Game')
@UseGuards(AuthGuard)

export class GameController {
    constructor(private service: GameService) {

    }
    @Post()
    create(@Body() dto: GameDto, @Request() { user }) {

        return this.service.create(dto, user['_id'])
    }

    @Get()
    find() {
        return this.service.find()
    }

    @Get('user')
    findUser(@Request() { user }) {
        return this.service.findUser(user['_id'])
    }

    @Get("time/:id")
    @ApiParam({ name: 'id' })
    setTime(@Param('id') id: string) {
        return this.service.setTime(id)
    }
    @Get("item/:id/:item")
    @ApiParam({ name: 'id' })
    @ApiParam({ name: 'item' })
    buyItem(@Param('id') id: string, @Param("item") item: string) {

        return this.service.buyItem(id, item)
    }

    @Get("health/:id/:value/:money")
    @ApiParam({ name: 'id' })
    @ApiParam({ name: 'value' })
    @ApiParam({ name: 'money' })
    async setHealth(@Param('id') id: string, @Param('value') value: number, @Param('money') money: number) {

        const payment = await this.service.setMoney(id, money)
        if (!payment) {
            return false
        }
        return this.service.setHealth(id, value,)
    }
    @Get("energy/:id/:value/:money")
    @ApiParam({ name: 'id' })
    @ApiParam({ name: 'value' })
    @ApiParam({ name: 'money' })

    async setEnergy(@Param('id') id: string, @Param('value') value: number, @Param('money') money: number) {



        const payment = await this.service.setMoney(id, money)
        if (!payment) {
            return false
        }
        return this.service.setEnergy(id, value,)
    }
    @Get("study/:id/:decree/:profession")
    @ApiParam({ name: 'id' })
    @ApiParam({ name: 'decree' })
    @ApiParam({ name: 'profession' })
    async study(@Param('id') id: string, @Param('decree') decree: Decree, @Param('profession') profession: string) {

        return this.service.study(id, decree, profession)
    }
    @Get("working/:id/:work/:money")
    @ApiParam({ name: 'id' })
    @ApiParam({ name: 'work' })
    @ApiParam({ name: 'money' })

    async working(@Param('id') id: string, @Param('work') work: string, @Param('money') money: number) {

        return this.service.working(id,work, money)
    }

    @Get("messeging/:id/:sender/:message")
    @ApiParam({ name: 'id' })
    @ApiParam({ name: 'sender' })
    @ApiParam({ name: 'message' })
    async messaging(@Param('id') id: string, @Param('sender') sender: string, @Param("message") message: string) {
        return this.service.messaging(id, sender, message)
    }
    @Post("saving/:id")
    @ApiParam({ name: 'id' })

    async saving(@Param('id') id: string, @Body() dto: SavingDto) {
        const m = this.service.setMoney(id, -dto.outcome)
        if (m) {

            return this.service.saving(id, dto)
        }
        return m
    }

    @Delete()
    delete() {
        return this.service.delete()
    }




    @Get("answer/:id")
    @ApiParam({ name: 'id' })
    // @ApiParam({ name: 'sender' })
    // @ApiParam({ name: 'message' })
    async answer(@Param('id') id: string,) {
        return this.service.setCorrectAnswer(id,)
    }

}
