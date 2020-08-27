import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './data-service.service'

@Component({
  selector: 'app-dataapi',
  templateUrl: './dataapi.component.html',
  styleUrls: ['./dataapi.component.css']
})
export class DataapiComponent implements OnInit {

  data: any=[];
  constructor(private user:DataServiceService) 
  {
    this.user.getData().subscribe(data=> {
      console.warn(data)
      this.data=data
     
     
      
    })
   }

  ngOnInit(): void {
  }

}
 