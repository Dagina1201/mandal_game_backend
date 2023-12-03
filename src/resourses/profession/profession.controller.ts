import { Controller, Post, Body, Get , UseGuards} from '@nestjs/common';
import { ProfessionService } from './profession.service';
import { ProfessionDto } from './profession.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('profession')
@ApiTags("Profession")
@UseGuards(AuthGuard)
export class ProfessionController {
    constructor(private service: ProfessionService) { }
    @Post()
    create(@Body() dto: ProfessionDto) {
        return this.service.create(dto)
    }

    @Get()
    find() {
        return this.service.find()
    }
}
