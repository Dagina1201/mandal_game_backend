import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Talent, TalentDocument } from 'src/schemas';
import { TalentDto } from './talent.dto';

@Injectable()
export class TalentService {
    constructor(@InjectModel(Talent.name) private model: Model<TalentDocument>) {

    }

    async create(dto: TalentDto) {
        try {
            return await this.model.create(dto)
        } catch (error) {
            
        }
    }

    async find() {
        try {
            return await this.model.find()
        } catch (error) {
            
        }
    }
    
}
