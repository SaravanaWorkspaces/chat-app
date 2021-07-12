import { REGISTER } from "../chat/socket-manager";

export const SERVER_INTERFACE = {
  ACKNOWLEDGEMENT : REGISTER.MESSAGE_ACKNOWLEDGEMENT
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