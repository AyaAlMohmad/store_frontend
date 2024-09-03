import { Component } from '@angular/core';
import { IgxCarouselComponent } from 'igniteui-angular';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  time:number=5000;
  public oneSlide:any[]=[

  ];
 
  public slides = [
    { src: '../../assets/images/1.jfif'},
    { src: '../../assets/images/2.jfif' },
    { src: '../../assets/images/th.jfif' },
    { src: '../../assets/images/image1.jpg' },
   


];
public slides5 = [
  
    { src: '../../assets/images/1.jfif' },
    { src: '../../assets/images/th.jfif' },
    { src: '../../assets/images/image1.jpg' },
    { src: '../../assets/images/2.jfif'},

];
showImage(slide: any) {
 this.oneSlide=[]
 this.oneSlide.push(slide);
 this.slides=this.oneSlide;
 setTimeout(() => {
  this.slides=this.slides5;
  this.time=5000
  
 }, 1);
}
}
