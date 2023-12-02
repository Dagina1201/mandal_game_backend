import { Module } from '@nestjs/common';
import { GameController } from './game.controller';
import { GameService } from './game.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Game, GameSchema } from 'src/schemas';
import { GameGateway } from './game.gateway';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Game.name, schema: GameSchema
    }])
  ],
  controllers: [GameController],
  providers: [GameService, GameGateway]
})
export class GameModule { }
