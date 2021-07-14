export const SERVER_INTERFACE = {
  ACKNOWLEDGEMENT : '_ack'
}

export enum MessageState {
  CREATED     = 1,
  PENDING,
  SENT,
  DELIVERED,
  READ,
  FAILED,
}
export interface MessageBase {

  id            : number

  windowId      : number       

  message       : string

  createdBy     : number  

  createdTs     : number
}
export interface Message extends MessageBase {

  state         : MessageState

  deleted       : boolean
}

export interface MessageAcknowledgement {
  
  messageId     : number,

  widowId       : number,

  messageState  : MessageState
}