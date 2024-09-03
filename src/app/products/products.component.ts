import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { AuthentacationService } from '../services/authentacation.service';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 
Allproducts:any[]=[]
id:any
 
  numberProducts: number = 0
  products: any[] = [];
  // productId!:any;
  //private activetedRoute:ActivatedRoute,private serviceProduct:ProductsService
  constructor(private auth: AuthentacationService, private prod: ProductsService, private activateRoute: ActivatedRoute
    , @Inject(DOCUMENT) private document: Document, private translateService: TranslateService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.auth.changeMenuHeaderProductOpen(false)
    this.auth.changeCloseMenu(false)
    //let id = this.activateRoute.snapshot.paramMap.get("id")
    this.route.params.subscribe((params)=>{
this.id=params['id']
this.prod.getAllProducts(this.id).subscribe((res: any) => {
  this.Allproducts=res.data
  console.log(res.data)
 // this.products = res.data;
 
 this.products=this.Allproducts.slice(0,15)
  this.numberProducts = res.data.length

})
    })

   

  }
  seeMoreProducts() {
    const currentLength=this.products.length
    const newData=this.Allproducts.slice(currentLength,currentLength +15);
    this.products=this.products.concat(newData)
    if(this.products.length===this.Allproducts.length){
const translatedMessage = this.translateService.instant('There are no additional products');
     alert(translatedMessage)
    }

    

  }

  scrollToTop() {
    this.document.body.scrollTop = 0; // For Safari
    this.document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  filterMaterial(filter: any) {
    const prod1 = filter.target.value;
    let id = this.activateRoute.snapshot.paramMap.get("id")
    this.prod.FilterMaterialProducts(id,prod1).subscribe((result:any)=>{
      this.products=result.data
      console.log(result)
    })
  


  }
  filterBYcategory(filter: any) {
    const prod2 = filter.target.value;
    console.log(prod2)
    this.prod.searchProduct(prod2).subscribe((res:any)=>{
      this.products=res.data
      console.log(this.products)
    })
    // this.products=this.products.filter((item)=>{
    //   return (item.sub_category.name).includes(prod1)

   // })
   // console.log(this.products) 
  //   let id = this.activateRoute.snapshot.paramMap.get("id")

  // if(prod1==="old"){

  //   this.prod.FilterByDASC(id).subscribe((result:any)=>{
  //     this.products=result.data
      //console.log(this.products)
    // console.log("old")
  //   })
  // }if(prod1==="new"){
  //   this.prod.FilterByASC(id).subscribe((result:any)=>{
  //     this.products=result.data
      //console.log("new")
      //console.log(this.products)


  //   })
  // }
   }

}

