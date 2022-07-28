import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-contact',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecommerce-project';
  // nam:string='ali';

  constructor(private login:LoginService){
    // console.log(this.login.login('add'));

  }


}
