import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Action, ActionDocument } from 'src/schemas';
import { ActionDto } from './action.dto';

@Injectable()
export class ActionService {
    constructor(@InjectModel(Action.name) private model: Model<ActionDocument>) {

    }

    async create(dto: ActionDto) {
        try {
            return await this.model.create(dto)
        } catch (error) {

        }
    }

    async findById(id: string) {
        try {
            return await this.model.findById(id)
        } catch (error) {

        }
    }

    async random() {
        try {
            const count = await this.model.countDocuments()
            const rand = Math.floor(Math.random() * count)
            return await this.model.findOne().skip(rand).exec()
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
