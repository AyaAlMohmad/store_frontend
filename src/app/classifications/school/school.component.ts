import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthentacationService } from 'src/app/services/authentacation.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  products:any[]=[]
  numberProd:number=0


  constructor(private auth:AuthentacationService,private activatedRoute:ActivatedRoute,private prod:ProductsService){}
  ngOnInit(): void {
    this.auth.changeCloseMenu(false) ;
    this.prod.getSchool().subscribe((result:any)=>{
      this.products=result.data
      console.log(result.data.category)
      this.numberProd=result.data.length

    })
   
  }
}
