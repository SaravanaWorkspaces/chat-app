import { io } from "socket.io-client";

export class SocketManager {

  socket = io("http://localhost:3000", {
    reconnectionDelayMax: 10000,
  })

  constructor() {
    this.socket.on('ack', (msg) => {
      console.log(msg)
    })
  }

  sendMessage(message : string) {
    this.socket.emit('chat message', message)
  } 
}