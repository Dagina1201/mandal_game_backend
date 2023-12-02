import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppGateway } from './app.gateway';
import { ConfigModule } from '@nestjs/config';
import appConfig from './config/app.config';
import { AuthModule } from './resourses/auth/auth.module';
import { UserModule } from './resourses/user/user.module';

import { MongooseModule } from '@nestjs/mongoose';
import { ActionModule } from './resourses/action/action.module';
import { GameModule } from './resourses/game/game.module';
import { ItemModule } from './resourses/item/item.module';
import { MessageModule } from './resourses/message/message.module';
import { ProfessionModule } from './resourses/profession/profession.module';
import { TalentModule } from './resourses/talent/talent.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
    }),

    MongooseModule.forRoot(appConfig().dbUrl, {
      // useNewUrlParser: true,
      // // useUnifiedTopology: true,
      dbName: appConfig().dbName,
    }),
    AuthModule,
    UserModule,
    ActionModule,
    // GameModule,
  // ItemModule,
    MessageModule,
    ProfessionModule,
    TalentModule

   
  ],
  controllers: [AppController],
  providers: [AppGateway],
})
export class AppModule {}
