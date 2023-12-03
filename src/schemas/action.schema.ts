import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ActionDocument = Document & Action;


class Answer {
  @Prop()
  answer: string
}

@Schema({ timestamps: true })
export class Action {

  @Prop()
  question: string
  @Prop({ type: Array<Answer> })
  answers: Answer[]
  @Prop()
  correct: number
}

export const ActionSchema = SchemaFactory.createForClass(Action);
