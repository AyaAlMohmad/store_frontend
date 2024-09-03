import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthentacationService } from 'src/app/services/authentacation.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-hospitality',
  templateUrl: './hospitality.component.html',
  styleUrls: ['./hospitality.component.css']
})
export class HospitalityComponent implements OnInit {
  numberProd:number=0
  products:any[]=[]
  constructor(private auth:AuthentacationService,private activatedRoute:ActivatedRoute,private prod:ProductsService){}

  ngOnInit(): void {
    this.auth.changeCloseMenu(false) ;
    
    this.prod.getHospitality().subscribe((result:any)=>{
      console.log(result.data)
      this.products=result.data
      this.numberProd=result.data.length
      
    })
  }

}
