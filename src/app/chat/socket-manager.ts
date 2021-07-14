import { Injectable } from "@angular/core";
import { io }             from "socket.io-client";
import { 
         Message
       }                  from "../shared/message";

export const REGISTER = {
  MESSAGE_ACKNOWLEDGEMENT: '_ack'
}

@Injectable({
  providedIn: 'root'
})
export class SocketManager {

  socket = io("http://localhost:3000", {
    reconnectionDelayMax: 10000,
  })

  constructor() {
    this.registerSocket()
  }

  registerSocket() {

    this.socket.on(REGISTER.MESSAGE_ACKNOWLEDGEMENT, (msg) => {
      console.log(msg)
    })
  }

  sendMessage(message : Message) {
    
    if (!message) return

    this.socket.emit('chat message', message)
  } 
}