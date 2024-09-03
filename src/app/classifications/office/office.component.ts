import { Component, OnInit } from '@angular/core';
import { AuthentacationService } from 'src/app/services/authentacation.service';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit{
  numberProd:number=0
  products:any[]=[]
  constructor(private auth:AuthentacationService,private activatedRoute:ActivatedRoute,private prod:ProductsService){}

  ngOnInit(): void {
   this.auth.changeCloseMenu(false) ;

  this.prod.getOffice().subscribe((result:any)=>{
    this.products=result.data
    this.numberProd=result.data.length
    console.log(result.data)

  })
  }
 
}
