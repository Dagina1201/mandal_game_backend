import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profession, ProfessionDocument } from 'src/schemas';
import { ProfessionDto } from './profession.dto';

@Injectable()
export class ProfessionService {
    constructor(@InjectModel(Profession.name) private model: Model<ProfessionDocument>) {

    }

    async create(dto: ProfessionDto) {
        try {
            return this.model.create({ ...dto, duration: 60 * 60 * 24 * 3 * 30 })
        } catch (error) {

        }
    }
}
