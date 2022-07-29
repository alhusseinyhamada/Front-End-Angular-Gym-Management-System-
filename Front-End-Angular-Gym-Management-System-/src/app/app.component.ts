import { Component } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { TokenService } from './shared/token.service';
import { AuthStateService } from './shared/auth-state.service';
=======
import { LoginService } from './services/login.service';

>>>>>>> b9fcf3bccd8a51931417ea2006c6a97f9f38eee1
@Component({
  selector: 'app-contact',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecommerce-project';
<<<<<<< HEAD



  isSignedIn!: boolean;
  constructor(
    private auth: AuthStateService,
    public router: Router,
    public token: TokenService
  ) {}
  ngOnInit() {
    this.auth.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
    });
  }
  // Signout
  signOut() {
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['login']);
  }

=======
  // nam:string='ali';

  constructor(private login:LoginService){
    // console.log(this.login.login('add'));

  }


>>>>>>> b9fcf3bccd8a51931417ea2006c6a97f9f38eee1
}
