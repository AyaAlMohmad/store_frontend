import { Component, OnInit } from '@angular/core';
import { AuthentacationService } from 'src/app/services/authentacation.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
  
  career:any[] =[]
  //openCareer:boolean=true;
  //openCollapse:boolean=false;
  constructor(private auth:AuthentacationService,private prod:ProductsService){}
  ngOnInit(): void {
    this.auth.changeCloseMenu(false)
    this.prod.getIndexCareers().subscribe((result:any)=>{
this.career=result.data
console.log(result.data)
    })

  }
}
