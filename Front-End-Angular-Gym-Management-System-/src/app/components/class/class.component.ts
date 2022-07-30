import { Classes } from './../../Models/classes';
import { Component, OnInit } from '@angular/core';
import {ClassCrudServicesService} from '../../services/class-crud-services.service'

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  classes:Classes[] = [];
  TodayClass:Classes[] = [];
  next2DayClass:Classes[] = [];
  
  // url:any = 'http://127.0.0.1:8000/public/assets/images/classess'
  constructor(private classCrudServicesService:ClassCrudServicesService) { }

  ngOnInit(): void {
    this.classCrudServicesService.getclasses().subscribe( res=>{
      console.log(res)
      this.classes = res;
    })

    this.classCrudServicesService.getTodayClass().subscribe( res=>{
      console.log(res)
      this.TodayClass = res;
    })

    this.classCrudServicesService.getnext2DayClass().subscribe( res=>{
      console.log(res)
      this.next2DayClass = res;
    })
  }

}
