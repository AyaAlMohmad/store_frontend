import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { AuthentacationService } from '../services/authentacation.service';

@Component({
  selector: 'app-privcy',
  templateUrl: './privcy.component.html',
  styleUrls: ['./privcy.component.css']
})
export class PrivcyComponent implements OnInit {
  
  policy:any[]=[]
  policyData:any[]=[]
  constructor(private prod:ProductsService,private auth:AuthentacationService){}

  ngOnInit(): void {
    this.auth.changeCloseMenu(false)
    this.prod.getCookiePolicy().subscribe((result:any)=>{
this.policy=result.data;
    })
    this.prod.getDatapolicy().subscribe((result:any)=>{
this.policyData=result.data
    })
  }

}
