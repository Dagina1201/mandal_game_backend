import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item, ItemDocument } from 'src/schemas';
import { ItemDto } from './item.dto';
import { Genders, ItemTypes } from 'src/utils/enum';

@Injectable()
export class ItemService {
    constructor(@InjectModel(Item.name) private model: Model<ItemDocument>) {

    }

    async create(dto: ItemDto) {
        try {
            return await this.model.create(dto)
        } catch (error) {
            console.log(error)
        }
    }

    async getType(type: ItemTypes) {
        try {
            return await this.model.find({ type: type })
        } catch (error) {

        }
    }

    async random(gender: Genders) {
        try {
            const count = await this.model.find({ gender }).countDocuments()
            const random = Math.floor(Math.random() * count)
            return await this.model.findOne({ gender }).skip(random)
        } catch (error) {

        }
    }

    async start() {
        try {
            return (await this.model.find({ status: 0 }))
        } catch (error) {

        }
    }

    async findGender(gender: Genders) {
        try {
            return await this.model.find({ gender: { '$in': [gender] } })
        } catch (error) {

        }
    }

    async findById(id: string) {
        try {
            return await this.model.findById(id)
        } catch (error) {

        }
    }

}
