import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Features, } from 'src/utils/enum';


export type ProfessionDocument = Document & Profession;

@Schema({ timestamps: true })
export class Profession {
  @Prop({ required: true })
  name: string
  @Prop({ default: 60 * 60 * 24 * 3 * 30 })
  duration: number
  @Prop({ type: Array<string>, enum: Features })
  features: Features[]
}

export const ProfessionSchema = SchemaFactory.createForClass(Profession);
