import { Module } from '@nestjs/common';
import { ProfessionController } from './profession.controller';
import { ProfessionService } from './profession.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Profession, ProfessionSchema } from 'src/schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: Profession.name, schema: ProfessionSchema }])],
  controllers: [ProfessionController],
  providers: [ProfessionService]
})
export class ProfessionModule { }
