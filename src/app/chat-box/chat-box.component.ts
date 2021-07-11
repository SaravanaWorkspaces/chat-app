import { Component, OnInit } from '@angular/core'
import { SocketManager }     from '../chat/socket-manager'

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  message : string = ''

  socketMgr = new SocketManager()

  constructor() { }

  ngOnInit(): void {}

  sendMessage() {
    this.socketMgr.sendMessage(this.message)
    this.message = ''
  }
}
