import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samplefun',
  templateUrl: './samplefun.component.html',
  styleUrls: ['./samplefun.component.css']
})
export class SamplefunComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  altbtnclick(){
    alert("Welcome to Creative Design")
  }


  altbtnclick2(myname){
    alert(myname)
  }


  myName=""
  myEvent(evt)
  {
    console.warn(evt)
    this.myName=evt
  }


  show=""
  show2="blue"

  color="red"



  
data=[
  {
    position: 1,
    name: 'Robin',
    age: 30,
    sex: 'Male',
    mobile: '9876543210',
    country: 'India'
  },
  {
    position: 2,
    name: 'Pankaj',
    age: 22,
    sex: 'Male',
    mobile: '4141543210',
    country: 'India'
  },
  {
    position: 3,
    name: 'Soni',
    age: 24,
    sex: 'Female',
    mobile: '7476543210',
    country: 'UK'
  },
  {
    position: 4,
    name: 'Rock',
    age: 44,
    sex: 'Male',
    mobile: '2412543210',
    country: 'India'
  },
  {
    position: 5,
    name: 'Sam',
    age: 47,
    sex: 'Male',
    mobile: '6276543210',
   country: 'India'
  },
]


dynamiccolor="blue"

colorchange(){
  this.color="Green"
}

err= false;
}
