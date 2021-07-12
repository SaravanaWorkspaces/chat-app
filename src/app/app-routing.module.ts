import { NgModule }             from '@angular/core'
import { 
         RouterModule, 
         Routes 
       }                        from '@angular/router'
import { ChatBoxComponent }     from './chat-box/chat-box.component'
import { HomeComponent }        from './home/home.component'
import { LandingPageComponent } from './landing-page/landing-page.component'

export const AppRouter = {
  Home        : '',
  Landing     : 'landing-page',
  Chat_Box    : 'chat-box' 
}

const routes: Routes = [
  {
    path: AppRouter.Home,
    component: HomeComponent
  },
  {
    path: AppRouter.Landing,
    component: LandingPageComponent
  },
  {
    path: AppRouter.Chat_Box,
    component: ChatBoxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
