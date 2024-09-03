import { Component, OnInit } from '@angular/core';
import { AuthentacationService } from '../services/authentacation.service';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-mobile-search',
  templateUrl: './mobile-search.component.html',
  styleUrls: ['./mobile-search.component.css']
})
export class MobileSearchComponent implements OnInit {

  AllsearchProducts: any[] | undefined;
  searchName: any = "";
  numberProduct:number=0

  searchResult: undefined | any[];

  constructor(private auth: AuthentacationService, private activateRoute: ActivatedRoute
    , private prod: ProductsService,private translateService: TranslateService) { }

  ngOnInit(): void {
    this.auth.changeCloseMenu(false);

    // let name = this.activateRoute.snapshot.paramMap.get("name");
    // this.prod.searchProduct(name).subscribe((result: any) => {
    //   this.searchProducts = result.data;
    //   console.log(this.searchProducts)
    // })

  }
  searchProductss(query: KeyboardEvent) {


    if (query) {

      const element = query.target as HTMLInputElement;
      //console.log(element.value)
    this.searchName = element.value

      this.prod.searchProduct(element.value).subscribe((result: any) => {
        console.log(result)
      this.numberProduct=result.data.length

       

        // }
        this.AllsearchProducts=result.data
        this.searchResult = this.AllsearchProducts.slice(0,10)
      })
    }

  }
  seeMoreProducts(){
   // this.prod.searchProduct(this.searchName).subscribe((result: any) => {
      //console.log(result)
      if(this.searchResult.length===this.AllsearchProducts.length){
        const translatedMessage = this.translateService.instant('There are no additional products');
             alert(translatedMessage)
      }else{
       // this.numberProduct=result.data.length
        const currentLength=this.searchResult.length;
        const NewData=this.AllsearchProducts.slice(currentLength,currentLength+10)
        this.searchResult=this.searchResult.concat(NewData)
      }
   

    
       
     
   // })
  }

}
