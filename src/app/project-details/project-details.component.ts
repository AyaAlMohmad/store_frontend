import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
 

  time:number=5000;
  slides:any[]|undefined
  slides5:any[]|undefined
  public oneSlide:any[]=[];
  desc:string=''

  constructor(private activateRoute:ActivatedRoute,private prod:ProductsService){}
  ngOnInit(): void {
    let id=this.activateRoute.snapshot.paramMap.get('id');
 this.prod.getProjectDetails(id).subscribe((result:any)=>{
  this.slides=result.data[0].images;
      this.slides5=result.data[0].images;
      this.desc=result.data[0].translations.description;
console.log(this.slides)
}) 
    
  }
  showImage(slide: any) {
    this.oneSlide=[]
    this.oneSlide.push(slide);
    this.slides=this.oneSlide;
    setTimeout(() => {
     this.slides=this.slides5;
     this.time=5000
     
     }, 1);
   }
}
