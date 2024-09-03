import { Component, OnInit } from '@angular/core';
import { AuthentacationService } from '../services/authentacation.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {
   question:any[]|undefined

  constructor(private  auth:AuthentacationService,private prod:ProductsService){}
  ngOnInit(): void {
    this.auth.changeCloseMenu(false)


  this.prod.getFAQ_s().subscribe((result:any)=>{
    //console.log(result)
    this.question=result.data;
  })
    
  }

}
