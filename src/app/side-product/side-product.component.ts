import { Component, OnInit } from '@angular/core';
import { AuthentacationService } from '../services/authentacation.service';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-product',
  templateUrl: './side-product.component.html',
  styleUrls: ['./side-product.component.css']
})
export class SideProductComponent implements OnInit {
   Category:any[] | undefined
   SubCategory:any[] | undefined

 

  constructor(private auth:AuthentacationService,private prod:ProductsService,private route:Router){}
  ngOnInit(): void {
  // this.prod.getIndex_Category().subscribe((result:any)=>{
  //   //console.log(result.data)
  //   this.Category=result.data
  // }) 
  this.prod.getIndexSubCategory().subscribe((result:any)=>{
    this.SubCategory=result.data;
   // console.log(this.SubCategory)
  })
  }
changeValue1(){
this.auth.changeValueForSubMenu(false)

}
loadProducts(id:any){
  // this.route.navigate([`/products/${id}`]);
  this.route.navigate([`/products/${id}`]);

  this.changeValue1();
  this.auth.changeCloseMenu(false)

}
  
}
