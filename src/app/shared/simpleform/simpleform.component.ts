import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent implements OnInit {

  constructor() { }

  
  firstname = '';
  lastname = ''; 

  ngOnInit(): void {
  }

  formSubmit(value)  {
    console.log(value) 
    
  }


}
