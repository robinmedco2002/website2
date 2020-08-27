import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 // Slider Images
 slides = [
   {'image': '../../assets/images/1.jpg'}, 
   {'image': '../../assets/images/2.jpg'},  
   {'image': '../../assets/images/3.jpg'}, 
   {'image': '../../assets/images/4.jpg'},  
   {'image': '../../assets/images/5.jpg'}, 
   {'image': '../../assets/images/6.jpg'}, 
  ];
 

}
