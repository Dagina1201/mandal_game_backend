import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Action } from './action.schema';
import { AgeTypes } from 'src/utils/enum';


export type MessageDocument = Document & Message;


@Schema({ timestamps: true })
export class Message {
    @Prop({ required: true })
    text: string
    @Prop({ enum: AgeTypes })
    ageType: AgeTypes

    @Prop({ type: Types.ObjectId, ref: 'actions' })
    action: Action

}

export const MessageSchema = SchemaFactory.createForClass(Message);
