import { Module } from '@nestjs/common';
import { TalentController } from './talent.controller';
import { TalentService } from './talent.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Talent, TalentSchema } from 'src/schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: Talent.name, schema: TalentSchema }])],
  controllers: [TalentController],
  providers: [TalentService]
})
export class TalentModule { }
