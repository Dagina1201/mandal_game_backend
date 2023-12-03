import { Module } from '@nestjs/common';
import { WorkController } from './work.controller';
import { WorkService } from './work.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Work, WorkSchema } from 'src/schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: Work.name, schema: WorkSchema }])],
  controllers: [WorkController],
  providers: [WorkService]
})
export class WorkModule { }
