import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { AuthentacationService } from '../services/authentacation.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchName: any = "";
  numberProduct:number=0
  AllSearchResult:any[]=[]
  

  searchResult: undefined | any[];
  constructor(private activetedRoute: ActivatedRoute, private prod: ProductsService, private auth: AuthentacationService,
    private route: Router,private translateService: TranslateService) { }

  ngOnInit(): void {
    this.auth.changeCloseMenu(false)
    let name = this.activetedRoute.snapshot.paramMap.get("name");
    this.searchName = name
    // console.log(name)
    name && this.prod.searchProduct(name).subscribe((result: any) => {
      this.numberProduct=result.data.length
      this.AllSearchResult=result.data

      this.searchResult = this.AllSearchResult.slice(0,15)

    })

  }
  searchProducts(query: KeyboardEvent) {


    if (query) {

      const element = query.target as HTMLInputElement;
      //console.log(element.value)
    this.searchName = element.value

      this.prod.searchProduct(this.searchName).subscribe((result: any) => {
        console.log(result.data)
      this.numberProduct=result.data.length

      this.AllSearchResult=result.data
      this.searchResult = this.AllSearchResult.slice(0,15)
        
      })
    }

  }
  seeMoreProducts(){
   // this.prod.searchProduct(this.searchName).subscribe((result: any) => {
      //console.log(result)
      if(this.searchResult.length===this.AllSearchResult.length){
        const translatedMessage = this.translateService.instant('There are no additional products');
             alert(translatedMessage)
      }else{
       // this.numberProduct=result.data.length
        const CurrentLength=this.searchResult.length
        const NewData=this.AllSearchResult.slice(CurrentLength,CurrentLength+15)
        this.searchResult=this.searchResult.concat(NewData)
        
      }
    


   
   // })
  }

}


