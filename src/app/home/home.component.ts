import { 
         Component, 
         OnInit 
        }                    from '@angular/core';
import { Router }            from '@angular/router';
import { AppRouter }         from '../app-routing.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  LOADING_TIME = 3000

  constructor(private router: Router) { }

  ngOnInit(): void {

    setTimeout(() => {
      this.router.navigate([AppRouter.Chat_Box])
    }, this.LOADING_TIME);
  }
}
