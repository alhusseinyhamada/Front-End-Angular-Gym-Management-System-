import { Component, OnInit } from '@angular/core';
import { Trainer } from 'src/app/Models/trainer';
import { CrudTrainerService } from 'src/app/services/crud-trainer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Trainers:Trainer[] = [];
  constructor(private crudTrainerService:CrudTrainerService) { }

  ngOnInit(): void {
    this.crudTrainerService.getTrainers().subscribe( res=>{
      console.log(res)
      this.Trainers = res;
    });
  }
 
}
