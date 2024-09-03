import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { AuthentacationService } from '../services/authentacation.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-header-product',
  templateUrl: './header-product.component.html',
  styleUrls: ['./header-product.component.css']
})
export class HeaderProductComponent implements OnInit {
menuProductIsOpen:boolean=true;
Category:any[] | undefined
   SubCategory:any[] | undefined;
   menu1:any[] |undefined
   menu11:any[] |undefined
   menu12:any[] |undefined
   menu13:any[] |undefined



   menu2:any[] |undefined
   menu21:any[] |undefined
   menu22:any[] |undefined
   menu23:any[] |undefined


   menu3:any[] |undefined
   menu31:any[] |undefined
   menu32:any[] |undefined

   menu4:any[] |undefined
   menu5:any[] |undefined

constructor(private prod:ProductsService,private auth:AuthentacationService,private route:Router){}
ngOnInit(): void {
  
  // this.prod.getIndex_Category().subscribe((result:any)=>{
  //   console.log(result.data)
  //   this.Category=result.data
  // }) 
  this.prod.getIndexSubCategory().subscribe((result:any)=>{
    this.SubCategory=result.data;
    //console.log(this.SubCategory) 
    this.menu1=result.data[0].sub_category
    this.menu11=this.menu1.slice(0,5)
    this.menu12=this.menu1.slice(5,11)
    this.menu13=this.menu1.slice(11,13)



    this.menu2=result.data[1].sub_category;
    this.menu21=this.menu2.slice(0,5)
    this.menu22=this.menu2.slice(5,9)

    
    this.menu3=result.data[2].sub_category
    this.menu31=this.menu3.slice(0,2)
    this.menu32=this.menu3.slice(2,9)

    this.menu4=result.data[3].sub_category

    this.menu5=result.data[4].sub_category
    console.log(this.menu2)

  })
  
}
loadProduct(id:any)
{
  console.log(id)
  this.route.navigate([`/products/${id}`])
  this.auth.changeMenuHeaderProductOpen(false)
}
close(){
  this.auth.changecloseHeaderProducts(false)
}
}
