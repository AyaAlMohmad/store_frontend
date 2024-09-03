import { Component, OnInit } from '@angular/core';
import { AuthentacationService } from 'src/app/services/authentacation.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact:any[]=[]

  constructor(private auth:AuthentacationService,private prod:ProductsService){}

  ngOnInit(): void {
    this.auth.changeCloseMenu(false);
    this.prod.getContact().subscribe((result:any)=>{
this.contact=result.data
console.log(result.data)
    })
  }

}
