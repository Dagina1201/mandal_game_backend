import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Game, GameDocument } from 'src/schemas';
import { GameDto } from './game.dto';
import { AgeCalc } from 'src/utils/functions';
import { ItemService } from '../item/item.service';

@Injectable()
export class GameService {
    constructor(@InjectModel(Game.name) private model: Model<GameDocument>, private item: ItemService) { }

    async npc(parent: boolean) {
        try {

            return await this.model.create({
                health: 50,
                age: parent ? 36 : 0,

            })
        } catch (error) {

        }
    }

    async create(dto: GameDto, user: string) {
        try {

            let parent = await this.model.findOne({ age: { "$gte": 36 } })
            if (!parent) {
                parent = await this.npc(true);
            }
            if (dto.age >= 36) {
                let child = await this.model.findOne({ age: { "$lte": dto.age - 18 } })
                if (!child) {
                    child = (await this.npc(false))._id
                }
                dto.child = child._id
            }
            const health = Math.floor(Math.random() * 50) + 50
            const luck = Math.floor(Math.random() * 50) + 20
            dto.age = AgeCalc(dto.age)
            const item = (await this.item.random(dto.gender))._id

            const features = []
            dto.talents.map((talent) => {
                const luck = Math.floor(Math.random() * 80) + 20
                console.log(luck)
                features.push(talent.feature)
                return talent.luck = luck
            })

            const money = Math.floor(Math.random() * 100000000) + 1000000



            await this.model.create({ ...dto, user: user, date: 0, health: health, xp: 0, money: money, parent: parent._id, luck: luck, item: item, items: [item], features: features, working: 0 })
        } catch (error) {

        }
    }
}
