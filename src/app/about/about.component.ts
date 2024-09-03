import { Component, OnInit } from '@angular/core';
import { AuthentacationService } from '../services/authentacation.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
about:any[]=[]
  constructor(private auth:AuthentacationService,private prod:ProductsService){}

  ngOnInit(): void {
    this.auth.changeCloseMenu(false)
    this.prod.getAboutUs().subscribe((result:any)=>{
this.about=result.data
console.log(result.data)
    })
    
  }

}
