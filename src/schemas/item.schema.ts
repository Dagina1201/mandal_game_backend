import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Genders, ItemPriceType,  ItemTypes } from 'src/utils/enum';

export type ItemDocument = Document & Item;


@Schema({ timestamps: true })
export class Item {
  @Prop({ required: true })
  uri: string
  @Prop({ required: true })
  name: string
  @Prop({ required: true })
  code: string
  @Prop({ required: true })
  price: number
  @Prop({ enum: ItemPriceType })
  priceDuration: ItemPriceType
  @Prop({})
  status: number

  @Prop({ enum: ItemTypes })
  type: ItemTypes
  @Prop({ enum: Genders, type: Array<string> })
  gender: Genders[]
}

export const ItemSchema = SchemaFactory.createForClass(Item);
