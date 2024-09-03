import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthentacationService } from 'src/app/services/authentacation.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit{


  slides:any[] =[];


  projects:any[]=[];
  constructor(private auth:AuthentacationService,private prod:ProductsService, @Inject(DOCUMENT) private document: Document){}
 

 

  ngOnInit(): void {
    this.auth.changeMenuHeaderProductOpen(false)
    this.auth.changeCloseMenu(false)
    this.prod.getProjects().subscribe((result:any)=>{
      console.log(result.data[0].images)
      this.slides=result.data.map(item => item.images[0])
      this.projects=result.data
     console.log(result.data)

    })
  }
  scrollToTop() {
    this.document.body.scrollTop = 0; // For Safari
    this.document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
