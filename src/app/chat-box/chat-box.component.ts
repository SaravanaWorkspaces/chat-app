import { Component, OnInit } from '@angular/core'
import { ChatService } from '../service/chat.service'
import { Message } from '../shared/message'

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  message : string = ''

  messages : Message [] = []

  constructor(private msgService: ChatService) { 
  }

  ngOnInit(): void {
    this.messages = this.msgService.msgs
  }

  sendMessage() {
    if (!this.message) return
    
    this.msgService.sendMessage(this.message)
    this.message = ''
  }
}
