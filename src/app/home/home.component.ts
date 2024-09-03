import { Component, OnInit } from '@angular/core';
import { VedioImageService } from '../services/vedio-image.service';
import { AuthentacationService } from '../services/authentacation.service';
import { Input } from 'hammerjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  vedios:any[]=[];
  Img:any[]=[];
https: any;
showhome:boolean=true;

  constructor(private ved_img:VedioImageService,private auth:AuthentacationService){}
  ngOnInit(): void {
    this.getVed_Img(); 
    this.auth.getmenuMobile().subscribe((res)=>{
      this.showhome=!res
    })
  }
getVed_Img(){
  this.ved_img.getVedio_Img().subscribe((val:any)=>{
console.log(val)

this.vedios=val.data.video;
this.Img=val.data.image;


  })
}

}
