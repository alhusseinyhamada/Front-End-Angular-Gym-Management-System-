import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private lgin:LoginService) {
    // console.log(this.lgin.login('aj'));
  }

  ngOnInit(): void {
  }

  color="";
  go(){
    this.color="green";
  }
  back(){
    this.color="";
  }


}
