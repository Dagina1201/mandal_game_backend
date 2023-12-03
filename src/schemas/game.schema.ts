import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document, Types } from 'mongoose';
import { Decree, Features, Genders, MissionTypes, SavingTypes, WorkTypes } from 'src/utils/enum';
import { User } from './user.schema';
import { Item } from './item.schema';

export type GameDocument = Document & Game;

export class Saving {
  @Prop({ enum: SavingTypes })
  type: SavingTypes
  // @Prop()
  // text: string
  @Prop({ enum: MissionTypes })
  mission: MissionTypes
  @Prop()
  outcome: number
  @Prop()
  money: number
  @Prop()
  rate: number
  @Prop()
  total: number

}
class Talents {
  @Prop({ type: Types.ObjectId, ref: 'talents' })
  talent: string
  @Prop({ min: 10, max: 20 })
  luck: number
}

class Professions {
  @Prop({ type: Types.ObjectId, ref: 'professions' })
  profession: string
  @Prop({ enum: Decree })
  decree: Decree
}





@Schema({ timestamps: true })
export class Game {
  // @Prop({ required: true })
  // types: GameTypes;
  @Prop({ type: Types.ObjectId, ref: 'users' })
  user: User
  @Prop()
  age: number;
  @Prop()
  date: number;
  @Prop({ enum: Genders })
  gender: Genders

  @Prop({ required: true, default: 100 })
  health: number
  @Prop({ required: true, default: 100 })
  energy: number
  @Prop({ required: true, default: 100 })
  lifeTime: number
  @Prop({ required: true, default: 100 })
  xp: number
  @Prop({ required: true, default: 100 })
  money: number
  @Prop({ type: Array<Saving>, })
  saving: Saving[]
  @Prop({ type: Types.ObjectId, ref: "games", })
  parent: string
  @Prop({ type: Types.ObjectId, ref: "games", })
  child: string
  @Prop({ required: true, })
  luck: number

  @Prop({ type: [Professions], })
  professions: Professions[]
  @Prop({ type: Professions })
  profession: Professions
  @Prop({ type: [Types.ObjectId], ref: 'works' })
  works: string[]
  @Prop({ type: Types.ObjectId, ref: 'works' })
  work: string

  @Prop({ type: [Types.ObjectId], ref: 'items' })
  items: string[]
  @Prop({ type: Array<Item>, ref: 'items' })
  item: Item[]
  
  @Prop({ type: Array<Talents>, ref: 'talents' })
  talents: Talents[]

  @Prop({ type: Array<string>, enum: Features })
  features: Features[]

  @Prop({ type: Array<string> })
  inComingMessages: string[]
  @Prop({ type: Array<string> })
  sendMessages: string[]
  @Prop({ enum: WorkTypes, default: WorkTypes.NOT })
  working: WorkTypes
  @Prop({ default: 0 })
  income: number
  @Prop({ default: 0 })
  workingDuration: number

  @Prop({ default: 1 })
  healthDuration: number
  @Prop({ default: 1 })
  energyDuration: number
  @Prop({ default: false })
  danger: boolean
  @Prop({ default: 0 })
  level: number
  @Prop({ required: false })
  studing: boolean
  @Prop({ default: 0 })
  studingPayment: number
  @Prop({ default: 0 })
  studingMoney: number
  @Prop({ enum: Decree })
  studingDecree: Decree
  @Prop()
  studingProfession: string
}

export const GameSchema = SchemaFactory.createForClass(Game);
