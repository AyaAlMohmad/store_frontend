import { Component, OnInit } from '@angular/core';
import { AuthentacationService } from '../services/authentacation.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history:any[]=[]
  images:any[]=[]
  


  constructor(private auth:AuthentacationService,private prod:ProductsService){}

  ngOnInit(): void {
    this.auth.changeCloseMenu(false);


    this.prod.getHistory().subscribe((result:any)=>{
      this.history=result.data
      this.images=this.history[2].images
      


    })
  }

}
