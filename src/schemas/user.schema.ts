import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type UserDocument = Document & User;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, minlength: 6 })
  username: string;
  // @Prop()
  // lastname: string;
  // @Prop()
  // firstname: string;

  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
