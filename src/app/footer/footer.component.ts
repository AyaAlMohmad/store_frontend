import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
social:any[]=[]
  constructor(private prod:ProductsService){}
  ngOnInit(): void {
    this.prod.getSocial().subscribe((result:any)=>{
      this.social=result.data
      console.log(this.social)
           })
    
  }

}
