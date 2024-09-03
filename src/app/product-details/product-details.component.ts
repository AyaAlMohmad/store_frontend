import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { MatChipsModule } from '@angular/material/chips';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 

image:any=""
 // showModal = false;
  selectedImage = '';
  time:number=5000;
  isClose = false;
  productDetails:any[]=[]
  slides:any[]|undefined
  slides5:any[]|undefined
  slides6:any[]|undefined

  idArray:any[] |undefined
  colors:any[]|undefined
  social:any[]=[]
 //  modal:any
  //colors:any[]=["red","green","blue"]
zoomimg:any
  public oneSlide:any[]=[];
  imgmodalid: any;
  mainImage:any[]=[];


  constructor(private activatedRoute:ActivatedRoute,private prod:ProductsService,private route:Router,
     @Inject(DOCUMENT) private document: Document , private elementRef: ElementRef){
    //  this.modal = new ElementRef(document.getElementById('myModal'));
     }

   
  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    let id_sub=1
    this.prod.showProduct(id).subscribe((result: any) => {
       console.log(result.data)
       this.mainImage[0]=result.data.image_main
      this.productDetails[0] = result.data;
      id_sub=result.data.sub_category_id;
      this.slides = result.data.images;
      this.slides= this.slides.concat(this.mainImage)
      this.slides5 = result.data.images;

      this.colors = Array.from([result.data.color[0].translation.en.name]);

     //console.log(id_sub)

      // console.log(this.productDetails[0])
      // console.log(this.colors)
    })
    this.prod.getSocial().subscribe((result: any) => {
      this.social = result.data
    })
    this.prod.getAllProducts(id_sub).subscribe((res: any) => {
      this.slides6 = res.data.map(item => item.image_main);
      this.idArray=res.data.map(item=> item.id)
      //console.log(this.slides6)
      console.log(res)
     })
    
  }
  showImage(slide: any) { 
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.oneSlide=[]
    this.oneSlide.push(slide);
    this.slides=this.oneSlide;
    setTimeout(() => {
     this.slides=this.slides5;
     this.time=5000
     
     }, 1);
   }
   AddProduct(){
    const token=localStorage.getItem("token");
   let id=this.activatedRoute.snapshot.paramMap.get('id')
  //console.log(token)
    if(token!==null){
      

      this.prod.OrderProducts(id).subscribe((result:any)=>{
       // console.log(result)
        alert("Add successfully")
            }) 
    }
   else{
    this.route.navigate(['/auth'])
   }
   
    
   }

routeTo(i:any){
  this.route.navigate([`/product-details/${this.idArray[i]}`])
 let id = this.activatedRoute.snapshot.paramMap.get("id");
  let id_sub=1
 this.prod.showProduct(id).subscribe((result: any) => {
  // console.log(result)
   this.productDetails[0] = result.data;
   id_sub=result.data.sub_category_id;
   this.slides = result.data.images;
   this.slides5 = result.data.images;
 
   this.colors = Array.from([result.data.color[0].translation.en.name]);
 
 // console.log(id_sub)
  this.document.body.scrollTop = 0; // For Safari
  this.document.documentElement.scrollTop = 0;
 
   // console.log(this.productDetails[0])
   // console.log(this.colors)
 })
   }
   openModal(imgsrc:any){
    this.zoomimg=imgsrc
    const modelDiv=document.getElementById("myModal")
    if(modelDiv!=null){
  
      modelDiv.style.display='block'
    }
  
  }
  closeModal(){
    const modelDiv=document.getElementById("myModal")
    if(modelDiv!=null){
  
      modelDiv.style.display='none'
    }
  
  }
  zoominn(){
   //let zoomin=document.getElementById('zoomin')
  let imgmodalid=document.getElementById('imgmodalid')
    imgmodalid?.classList.remove("imgmodal")
    this.imgmodalid?.classList.add("catzoomin")
  
  }
  zoomoutt(){
    let imgmodalid=document.getElementById('imgmodalid')
    imgmodalid?.classList.add("imgmodal")
    this.imgmodalid?.classList.remove("catzoomin")
  }
  

   
}
