export const SERVER_INTERFACE = {
  ACKNOWLEDGEMENT : '_ack'
}

export interface Message {

  id            : number

  windowId      : number       

  message       : string

  messageBy     : number  

  read          : boolean

  deleted       : boolean

  hardDeleted   : boolean

  ts            : number
}