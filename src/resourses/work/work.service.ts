import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Work, WorkDocument } from 'src/schemas';
import { WorkDto } from './work.dto';

@Injectable()
export class WorkService {
    constructor(@InjectModel(Work.name) private model: Model<WorkDocument>) {

    }

    async create(dto: WorkDto) {
        try {
            return await this.model.create(dto)
        } catch (error) {

        }
    }
    async find() {
        return await this.model.find()
    }
    async start() {
        return await this.model.find({ features: { $lte: [] } })
    }
}
