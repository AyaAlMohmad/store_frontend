import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthentacationService } from 'src/app/services/authentacation.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-outdoor',
  templateUrl: './outdoor.component.html',
  styleUrls: ['./outdoor.component.css']
})
export class OutdoorComponent implements OnInit {
  products:any[]=[]
  numberProd:number=0

  constructor(private auth:AuthentacationService,private activatedRoute:ActivatedRoute,private prod:ProductsService){}
  ngOnInit(): void {
    this.auth.changeCloseMenu(false) ;
    this.prod.getoutdoor().subscribe((result:any)=>{
      this.products=result.data
      this.numberProd=result.data.length
    })
    // let name= this.activatedRoute.snapshot.paramMap.get("name");
    // this.prod.getSub_categorywithnamecategory(name).subscribe((result:any)=>{
    //   this.products=result.data
      
    // })
  }
}
