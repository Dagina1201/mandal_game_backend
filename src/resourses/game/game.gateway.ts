import {
  SubscribeMessage,

  MessageBody,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,

} from '@nestjs/websockets';
import { Observable } from 'rxjs';
import { Server } from 'socket.io';
import { GameService } from './game.service';
import { Game } from 'src/schemas';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class GameGateway {
  @WebSocketServer()
  server: Server;
  constructor(private readonly service: GameService) { }



  @SubscribeMessage('events')
  async findAll(@MessageBody() data: string,) {

    const res = await this.service.setTime(data)

    this.server.emit('events', res)
  }

  @SubscribeMessage('identity')
  async identity(@MessageBody() data: number): Promise<number> {
    return data;
  }
}