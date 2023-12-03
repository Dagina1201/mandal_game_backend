import { Module , Global} from '@nestjs/common';
import { ActionController } from './action.controller';
import { ActionService } from './action.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Action, ActionSchema } from 'src/schemas';

@Global()
@Module({
  imports: [MongooseModule.forFeature([{ name: Action.name, schema: ActionSchema }])],
  controllers: [ActionController],
  providers: [ActionService],
  exports: [ActionService]
})
export class ActionModule { }
