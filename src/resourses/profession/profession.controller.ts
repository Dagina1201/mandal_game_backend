import { Controller, Post , Body} from '@nestjs/common';
import { ProfessionService } from './profession.service';
import { ProfessionDto } from './profession.dto';

@Controller('profession')
export class ProfessionController {
    constructor(private service: ProfessionService) {}
    @Post()
    create(@Body() dto: ProfessionDto) {
        return this.service.create(dto)
    }
}
