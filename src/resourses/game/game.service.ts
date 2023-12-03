import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Game, GameDocument } from 'src/schemas';
import { GameDto, SavingDto } from './game.dto';
import { AgeCalc, checkLevel } from 'src/utils/functions';
import { ItemService } from '../item/item.service';
import { Decree, ItemPriceType, MissionTypes, SavingTypes, WorkTypes } from 'src/utils/enum';
import { ActionService } from '../action/action.service';

@Injectable()
export class GameService {
    constructor(@InjectModel(Game.name) private model: Model<GameDocument>, private item: ItemService, private action: ActionService) { }

    async npc(parent: boolean) {
        try {

            const res = await this.model.create({
                health: 100,
                age: parent ? 36 : 0,
                energy: 100,
                xp: 0,
                money: 100000,
                luck: 0,
                studing: false

            })

            return res
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
                // let child = await this.model.findOne({ age: { '$and': [{ "$lte": dto.age >= 50 ? 36 : 18 }, { "$gte": dto.age >= 50 ? 18 : 36 }] } })
                let child = await this.model.findOne({ age: { "$lte": dto.age >= 50 ? 36 : 18 } })
                if (!child) {
                    child = (await this.npc(false))._id
                }
                dto.child = child._id
            }
            const health = Math.floor(Math.random() * 10) + 85
            const luck = Math.floor(Math.random() * 50) + 20
            const energy = Math.floor(Math.random() * 10) + 85
            const lifeTime = Math.floor(Math.random() * 15) + 85
            dto.age = AgeCalc(dto.age)
            const items = await this.item.start()

            const itemsId = items.map(e => e.id)
            const features = []
            const talents = []
            dto.talents.map((talent) => {

                const luck = Math.floor(Math.random() * 80)
                talents.push(talent._id)
                talent.features.map((e) => features.push(e))
                return talent.luck = luck
            })


            const money = Math.floor(Math.random() * 5000000) + 5000000

            const res = await this.model.create({ ...dto, items: itemsId, item: items, user: user, date: 0, health: health, xp: 0, money: money, parent: parent._id, luck: luck, level: 0, studing: false, danger: false, features: features, working: WorkTypes.NOT, energy, lifeTime, healthDuration: 1, energyDuration: 1, studingMoney: 0, studingPayment: 0, talents: talents })
            return res._id
        } catch (error) {
            console.log(error)
        }
    }
    async findById(id: string) {
        try {
            return await this.model.findById(id)
        } catch (error) {

        }
    }


    async findUser(user: string) {
        try {
            return await this.model.findOne({ user })
        } catch (error) {

        }
    }

    async find() {
        try {
            return await this.model.find()
        } catch (error) {

        }
    }

    async setTime(id: string) {
        try {
            const game = await this.findById(id)
            let money = game.money
            game.date += 1
            if (game.energyDuration == 0) {
                game.energyDuration = 1
            }
            if (game.healthDuration == 0) {
                game.healthDuration = 1
            }
            if (game.health < 50 && game.date % 30 == 0) {
                game.danger = true
            } else {
                game.danger = false
            }
            if (game.date % 360 == 0) {
                game.age += 1
            }
            if (game.date % 30 == 0) {
                game.health -= 0.5
                game.energy -= 0.6
            }
            game.item.map((e) => {


                if (e.priceDuration == ItemPriceType.DAY) {

                    money -= e.price

                } else {
                    if (game.date % 30 == 0) {

                        money -= e.price
                    }
                }
            })


            if (game.studing && game.date % 30 == 0) {
                if (game.studingPayment <= game.money) {
                    money -= game.studingPayment
                    if (game.studingMoney == game.studingPayment) {
                        game.studing = false;
                        game.studingMoney = 0;
                        game.studingPayment = 0
                        game.studingProfession = null
                        game.professions = [...game.professions, { decree: game.studingDecree, profession: game.studingProfession }]
                        game.profession = { decree: game.studingDecree, profession: game.studingProfession }

                    }
                    game.studingMoney -= game.studingPayment
                } else {
                    game.studing = false
                }
            }
            if (game.working == WorkTypes.MAIN) {
                game.workingDuration += 1
            }
            if (game.saving?.length > 0) {
                game.saving?.map((save) => {

                    if (save.outcome > 0) {
                        const diff = money - save.outcome
                        if (diff > 0) {
                            money -= save.outcome
                            const m = save.outcome
                            const total = save.total
                            save.total += Math.round((m + save.total * save.rate / 365))
                            if (m + total >= save.money) {
                                save.outcome = 0
                            }

                        }
                    }

                })
            }

            if (game.danger) game.lifeTime -= 1
            game.money = money

            game.save()
            return game
        } catch (error) {
            console.log(error)
        }
    }
    async setHealth(id: string, value: number,) {
        try {
            const game = await this.findById(id)
            const health = game.health * value
            if (game.health + health <= 50) {
                game.danger = true
            } else {
                game.danger = false
            }
            if (game.health + health > 100) {
                game.health = 100
            } else {
                game.health += health
            }
            game.healthDuration -= 1
            game.save()
            return true
        } catch (error) {
        }
    }
    async setEnergy(id: string, value: number,) {
        try {

            const game = await this.findById(id)
            const energy = game.energy * value
            if (game.energy + energy <= 50) {
                game.danger = true
            } else {
                game.danger = false
            }
            if (game.energy + energy > 100) {
                game.energy = 100
            } else {
                game.energy += energy
            }
            game.energyDuration -= 1
            game.save()
            return true
        } catch (error) {
        }
    }

    async setMoney(id: string, value: number) {
        try {
            const game = await this.findById(id)


            const money = game.money - value
            if (money < 0) {
                return false
            } else {

                game.money -= value
            }
   

            await game.save()
   
            return true
        } catch (e) {

        }
    }

    async setXp(id: string, value: number) {
        try {
            const game = await this.findById(id)
            const xp = game.xp + value
            game.level = checkLevel(xp)
            game.xp = xp
            game.save()
            return true
        } catch (e) {

        }
    }

    async buyItem(id: string, item: string) {
        try {
            const currentItem = await this.item.findById(item)
            if (!currentItem) {
                return false
            }
            const game = await this.findById(id)
            if (currentItem.price > game.money) {
                return false
            }

            game.money -= currentItem.price

            const items = []
            game.items = [...game.items, currentItem._id]
            game.item.map((i) => {

                if (i.type == currentItem.type) {

                    items.push(currentItem)
                } else {
                    items.push(i)

                }

            })

            game.item = items
            game.save()
            return true
        } catch (error) {
            console.log(error)
        }
    }


    async study(id: string, decree: Decree, profession: string) {
        try {
            let payment = 0;
            let money = 0

            switch (decree) {
                case Decree.BACHELOR:
                    payment = 2000000
                    money = payment * 24
                    break
            }

            const game = await this.findById(id)
            if (payment > game.money) {
                return false
            }
            game.studingDecree = decree
            game.studingProfession = profession
            game.money -= payment
            game.studing = true
            game.studingMoney = money
            game.studingPayment = payment
            game.save()
            return true
        } catch (error) {

        }
    }

    async working(id: string, work: string,  income: number) {
        try {

            const game = await this.findById(id)
            game.workingDuration = 0
            game.income = income
            game.work = work
            game.working = WorkTypes.NOT
            game.save()
        } catch (error) {

        }
    }

    async messaging(id: string, send: string, message: string) {
        try {

            const game = await this.findById(id)
            const sender = await this.findById(send)
            game.sendMessages = [...game.sendMessages, message]
            sender.inComingMessages = [...sender.inComingMessages, message]
            sender.save()
            game.save()
        } catch (error) {

        }
    }


    async saving(id: string, dto: SavingDto) {
        try {
            const game = await this.findById(id)
            game.saving = [...game.saving, { mission: dto.mission, type: dto.type, total: dto.outcome, money: dto.money, rate: dto.rate, outcome: dto.outcome }]
            game.save()
            return true
        } catch (error) {

        }

    }

    async delete() {
        return await this.model.deleteMany()
    }
    async setCorrectAnswer(id: string) {
        try {
            const game = await this.findById(id)

            game.money += 500000
            game.health *= 0.95
            game.energy *= 0.95
            game.save()

            return true
        } catch (error) {

        }
    }





}
