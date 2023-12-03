import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message, MessageDocument } from 'src/schemas';
import { MessageDto } from './message.dto';
import { AgeTypes } from 'src/utils/enum';

@Injectable()
export class MessageService {
    constructor(@InjectModel(Message.name) private model: Model<MessageDocument>) {

    }

    async create(dto: MessageDto) {
        try {
            return await this.model.create(dto)
        } catch (error) {

        }
    }
    async findAge(age: AgeTypes) {
        try {
            return await this.model.find({ ageType: age })
        } catch (error) {

        }
    }
}
