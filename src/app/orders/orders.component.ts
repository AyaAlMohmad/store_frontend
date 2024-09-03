import { Component, OnInit } from '@angular/core';
import { AuthentacationService } from '../services/authentacation.service';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

orderIndex:any[]=[];
  constructor(private auth:AuthentacationService,private prod:ProductsService,private activeteroute:ActivatedRoute){}

  ngOnInit(): void {
    
    this.auth.changeCloseMenu(false)
   // console.log(localStorage.getItem("token"))
    this.prod.OrderIndex().subscribe((result:any)=>{
      
      this.orderIndex=result.data
      console.log(result.data)
    })


   
  }
 
}
