import { NgModule }             from '@angular/core'
import { BrowserModule }        from '@angular/platform-browser'

import { AppRoutingModule }     from './app-routing.module'
import { AppComponent }         from './app.component'
import { LandingPageComponent } from './landing-page/landing-page.component'
import { HomeComponent }        from './home/home.component'
import { ChatBoxComponent }     from './chat-box/chat-box.component'
import { FormsModule }          from '@angular/forms'
import { MatListModule }        from '@angular/material/list'
import { MatCardModule }        from '@angular/material/card'

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomeComponent,
    ChatBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
