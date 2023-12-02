import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document, Types } from 'mongoose';
import { Decree, Features, Genders, SavingTypes } from 'src/utils/enum';
import { User } from './user.schema';
import { Talent } from './talent.schema';
import { Item } from './item.schema';
import { Work } from './work.schema';
import { Profession } from './profession.schema';

export type GameDocument = Document & Game;

export class Saving {
  @Prop({ type: SavingTypes })
  type: SavingTypes

}
class Talents {
  @Prop({ type: Types.ObjectId, ref: 'talents' })
  talent: Talent
  @Prop({ min: 20, max: 100 })
  luck: number
}

class Professions {
  @Prop({ type: Types.ObjectId, ref: 'professions' })
  prefession: Profession
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
  xp: number
  @Prop({ required: true, default: 100 })
  money: number
  @Prop({ type: Array<Saving>, })
  saving: Saving[]
  @Prop({ type: Types.ObjectId, ref: "games", })
  parent: Game
  @Prop({ type: Types.ObjectId, ref: "games", })
  child: Game
  @Prop({ required: true, })
  luck: number

  @Prop({ type: [Professions], })
  professions: Professions[]
  @Prop({ type: Professions })
  prefession: Professions
  @Prop({ type: [Types.ObjectId], ref: 'works' })
  works: Work[]
  @Prop({ type: Types.ObjectId, ref: 'works' })
  work: Work

  @Prop({ type: [Types.ObjectId], ref: 'items' })
  items: Item[]
  @Prop({ type: Types.ObjectId, ref: 'items' })
  item: Item
  @Prop({ type: Array<Talents>, ref: 'talents' })
  talents: Talents[]

  @Prop({type: Array<string>, enum: Features })
  features: Features[]

  @Prop({ type: Array<string> })
  inComingMessages: string[]
  @Prop({ type: Array<string> })
  sendMessages: string[]
  @Prop({default: 0})
  working: number
}

export const GameSchema = SchemaFactory.createForClass(Game);
