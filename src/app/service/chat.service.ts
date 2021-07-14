import { Injectable } from '@angular/core';
import { SocketManager } from '../chat/socket-manager';
import { Message, MessageState } from '../shared/message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  msgs : Message[] = [] 

  constructor(private socketMgr : SocketManager) { }

  sendMessage(message : string) {
    const newMsg = this.createNewMessage(message)

    this.socketMgr.sendMessage(newMsg)
    this.msgs.push(newMsg)
  }

  createNewMessage(message: string) {

    const msgObj: Message = {
      id             : 1,
      windowId       : 1,
      createdBy      : 1,
      state          : MessageState.CREATED,
      deleted        : false,
      createdTs      : new Date().getUTCMilliseconds(),
      message,
    }
    return msgObj
  }
}
