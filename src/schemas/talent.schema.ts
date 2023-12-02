import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Features } from 'src/utils/enum';

export type TalentDocument = Document & Talent;


@Schema({ timestamps: true })
export class Talent {
  @Prop({ required: true })
  name: string
  @Prop({ type: Array<string>, enum: Features,  minlength: 2 })
  features: Features[]
}

export const TalentSchema = SchemaFactory.createForClass(Talent);
