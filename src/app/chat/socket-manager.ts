import { io } from "socket.io-client";


export const REGISTER = {
  MESSAGE_ACKNOWLEDGEMENT: '_ack'
}
export class SocketManager {

  socket = io("http://localhost:3000", {
    reconnectionDelayMax: 10000,
  })

  constructor() {
    this.registerSocket()
  }

  sendMessage(message : string) {
    this.socket.emit('chat message', message)
  } 

  registerSocket() {
    
    this.socket.on(this.REGISTER.MESSAGE_ACKNOWLEDGEMENT, (msg) => {
      console.log(msg)
    })
  }
}