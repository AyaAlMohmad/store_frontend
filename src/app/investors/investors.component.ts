import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { AuthentacationService } from '../services/authentacation.service';

@Component({
  selector: 'app-investors',
  templateUrl: './investors.component.html',
  styleUrls: ['./investors.component.css']
})
export class InvestorsComponent implements OnInit {

  investors: any[] = []

  constructor(private prod: ProductsService, private auth: AuthentacationService) { }
  ngOnInit(): void {
    this.auth.changeCloseMenu(false)
    this.prod.getInvestors().subscribe((result: any) => {
      this.investors = result.data
    })
  }
}
