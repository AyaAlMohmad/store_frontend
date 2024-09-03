import { Component, OnInit } from '@angular/core';
import { AuthentacationService } from '../services/authentacation.service';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {
values:any[] |undefined

desc:string=""



  constructor(private auth:AuthentacationService,private prod:ProductsService){
  }
  ngOnInit(): void {
    this.auth.changeCloseMenu(false);
    this.prod.getValues().subscribe((result:any)=>{
      console.log(result.data)
      this.values=result.data
      this.desc=result.data[0].translations.description
      
    })
  
  }
 
}
  


