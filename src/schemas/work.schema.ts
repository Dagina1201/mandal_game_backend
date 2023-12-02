import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Features, WorkTypes } from 'src/utils/enum';




export type WorkDocument = Document & Work;

@Schema({ timestamps: true })
export class Work {
  @Prop({ required: true })
  name: string;
  @Prop()
  income: number
  @Prop()
  xp: number
  @Prop({ type: Array<Features> })
  features: Features[]
  @Prop({ enum: WorkTypes })
  type: WorkTypes
}

export const WorkSchema = SchemaFactory.createForClass(Work);
