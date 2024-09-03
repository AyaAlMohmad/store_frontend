import { Component, OnInit } from '@angular/core';
import { AuthentacationService } from '../services/authentacation.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {
  ourSolution:any[]=[]
  ourServices:any[]=[]
  images:any[]=[]
  constructor(private auth:AuthentacationService,private prod:ProductsService){}

  ngOnInit(): void {
    this.auth.changeCloseMenu(false)
    this.prod.getSolution().subscribe((res:any)=>{
      this.ourSolution=res.data
          })

          this.prod.GetService().subscribe((res:any)=>{
            this.ourServices=res.data
            this.images=res.data[0].images
            console.log(this.images)


          })
  }
}
