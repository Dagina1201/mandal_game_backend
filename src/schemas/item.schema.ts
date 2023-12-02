import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import  { Document } from 'mongoose';
import { Genders, ItemTypes } from 'src/utils/enum';

export type ItemDocument = Document & Item;


@Schema({ timestamps: true })
export class Item {
  @Prop({ required: true })
  uri: string
  @Prop({ required: true })
  name: string
  @Prop({ required: true })
  code: string

  @Prop({ enum: ItemTypes })
  type: ItemTypes
  @Prop({ enum: Genders })
  gender: Genders
}

export const ItemSchema = SchemaFactory.createForClass(Item);
