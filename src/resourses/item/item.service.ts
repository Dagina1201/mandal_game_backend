import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item, ItemDocument } from 'src/schemas';
import { ItemDto } from './item.dto';
import { Genders } from 'src/utils/enum';

@Injectable()
export class ItemService {
    constructor(@InjectModel(Item.name) private model: Model<ItemDocument>) {

    }

    async create(dto: ItemDto) {
        try {
            return await this.model.create(dto)
        } catch (error) {

        }
    }

    async random(gender: Genders) {
        try {
            const count = await this.model.find({gender}).countDocuments()
            const random = Math.floor(Math.random() * count)
            return await this.model.findOne({gender}).skip(random)
        } catch (error) {

        }
    }
}
