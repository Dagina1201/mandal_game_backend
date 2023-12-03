import { Module } from '@nestjs/common';
import { GameController } from './game.controller';
import { GameService } from './game.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Action, ActionSchema, Game, GameSchema, Item, ItemSchema } from 'src/schemas';
import { GameGateway } from './game.gateway';
import { ItemService } from '../item/item.service';
import { ActionService } from '../action/action.service';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Game.name, schema: GameSchema,

    }, { name: Action.name, schema: ActionSchema }, { name: Item.name, schema: ItemSchema }])
  ],
  controllers: [GameController],
  providers: [GameService, GameGateway, ItemService, ActionService]
})
export class GameModule { }
