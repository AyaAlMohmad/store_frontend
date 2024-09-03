import { Component, OnInit } from '@angular/core';
import { AuthentacationService } from 'src/app/services/authentacation.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-trade-contract',
  templateUrl: './trade-contract.component.html',
  styleUrls: ['./trade-contract.component.css']
})
export class TradeContractComponent implements OnInit {
  trade:any[]=[]
constructor(private auth:AuthentacationService,private prod:ProductsService){}
contractOpen:boolean=true;
becoming:boolean=false;
ngOnInit(): void {
  this.auth.changeCloseMenu(false);
  this.prod.getTradeandContract().subscribe((result:any)=>{
    this.trade=result.data
  })

}




}
