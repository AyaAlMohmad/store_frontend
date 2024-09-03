import { Component, Inject, OnInit } from '@angular/core';
import { AuthentacationService } from '../services/authentacation.service';
import { DOCUMENT } from '@angular/common';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-villas',
  templateUrl: './villas.component.html',
  styleUrls: ['./villas.component.css']
})
export class VillasComponent implements OnInit {
  slides:any[] =[];


  villas:any[]=[];
  constructor(private prod:ProductsService , private auth:AuthentacationService ,  @Inject(DOCUMENT) private document: Document){}
  ngOnInit(): void {
    this.auth.changeCloseMenu(false)

    this.auth.changeMenuHeaderProductOpen(false)
    this.auth.changeCloseMenu(false)
    this.prod.getVillas().subscribe((result:any)=>{
      console.log(result.data[0].image)
      this.slides=result.data.map(item => item.image)
      this.villas=result.data
     console.log(result.data)
  })

 
  
 

 


  
  // scrollToTop() {
  //   this.document.body.scrollTop = 0; // For Safari
  //   this.document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  // }
}}
