import {SubscribeMessage,

MessageBody,
WebSocketGateway,
WebSocketServer,
WsResponse,

} from '@nestjs/websockets';


// import { Logger } from '@nestjs/common';

import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from 'socket.io';
import { GameService } from './game.service';

@WebSocketGateway({
cors: {
  origin: '*',
},
})
export class GameGateway {
@WebSocketServer()
server: Server;
constructor(private readonly service: GameService) {}
@SubscribeMessage('events')
findAll(@MessageBody() data: string): Observable<WsResponse<number>> {
  console.log(data)
  return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
}

@SubscribeMessage('identity')
async identity(@MessageBody() data: number): Promise<number> {
  return data;
}
}