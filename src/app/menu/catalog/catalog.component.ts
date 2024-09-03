import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentacationService } from 'src/app/services/authentacation.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit{
  product=[
    1 , 2 , 3
  ]
  selectedProductImages: string[] = [];
  time:number=5000;
 
  products:any[]=[]
  showMore: boolean = false;
  catalog:any[]=[];

  toggleShowMore() {
    this.showMore = !this.showMore;
  }
  
  // constructor(private router: Router) {}

  // reloadPage() {
  //    const currentUrl = this.router.url; // حصول على المسار الحالي
  //    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
  //      this.router.navigate([currentUrl]); // إعادة التنقل إلى المسار الحالي
  //    });
  // }




constructor(private prod:ProductsService,private activetedroute:ActivatedRoute,private auth:AuthentacationService , private router: Router){}


ngOnInit(): void {
 
  this.auth.changeCloseMenu(false)
 


  this.prod.getCatalog().subscribe((res:any)=>{
    console.log(res.data[0])
    this.products=res.data[0].all_products
    this.catalog=res.data[0].catalog
    
   
  })

}


updateSelectedProductImages(index: number) {
  console.log(index)
  this.selectedProductImages = this.products[index].images;
}


















}
