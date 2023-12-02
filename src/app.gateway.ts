import {
  SubscribeMessage,

  MessageBody,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,

} from '@nestjs/websockets';


// import { Logger } from '@nestjs/common';

import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class AppGateway {
  @WebSocketServer()
  server: Server;

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
// @WebSocketGateway({
//   cors: {
//     origin: '*',
//   },
// })
// export class AppGateway
//   implements OnGatewayConnection, OnGatewayInit, OnGatewayDisconnect
// {
//   // constructor(private readonly orderService: OrderService) {}

//   @WebSocketServer()
//   server: Server;

// private logger: Logger = new Logger('AppGateway');
// private lawyers = [];
// @SubscribeMessage('create_emergency_order')
// async handleCreateEmergencyOrder(
//   @ConnectedSocket() client: Socket,
//   @MessageBody() payload: EmergencyOrderDto,
// ): Promise<void> {
//   let res = await this.orderService.createEmergencyOrder(payload);

//   this.server.emit('response_emergency_order', {
//     client: res.user,
//     _id: res.order.id,

//     channelName: res.order.channelName,
//   });
// }
// @SubscribeMessage('change_order_status')
// async updateStatus(
//   @ConnectedSocket() client: Socket,
//   @MessageBody()
//   payload: {
//     id: string;
//     status: LawyerStatus;
//     orderId: string;
//     orderStatus: ServiceStatus;
//   },
// ): Promise<void> {
//   let status = await this.orderService.updateLawyerStatus(
//     payload.id,
//     payload.status,
//     payload.orderId,
//     payload.orderStatus,
//   );
//   this.server.emit('response_emergency_order', status);
// }

// @SubscribeMessage('join_room')
// async joinRoomOurLawyer(@ConnectedSocket() client: Socket): Promise<void> {
//   this.lawyers.push(client.id);
//   await this.server.emit('onlineEmergency', this.lawyers);
// }

// afterInit(server: Server) {
//   this.logger.log(server);

//   //Do stuffs
// }

// handleDisconnect(client: Socket) {
//   this.logger.log(`Client disconnected: ${client.id}`);
//   this.lawyers.splice(this.lawyers.indexOf(client.id), 1);
//   //Do stuffs
// }

// async handleConnection(client: Socket, ...args: any[]) {
//   this.logger.log(`Client connected: ${client.id}`);

//   //Do stuffs
// }
// }
