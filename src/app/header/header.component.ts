import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

import { AuthentacationService } from '../services/authentacation.service';
import { TranslateService } from '@ngx-translate/core';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {
  
  lang:string=''
  searchValue:any="";
  valueshwoSubMenu: boolean=false;
  searchResult:undefined|any[]
  isClose = false;
  showSearchBox=false;
  isMenuProductOpen:boolean=false;
  openMenu:boolean=false;
  openMenuMobile:boolean=false;
  regester:boolean=true;

  constructor(private auth:AuthentacationService,public translateService:TranslateService
    ,private prod:ProductsService,private route: Router){}

   
  

  ngOnInit(): void {
    this.auth.changemenuMobile(this.openMenuMobile)
    this.auth.getcloseHeaderProducts().subscribe((res:any)=>{
      this.isMenuProductOpen=res
    })
    this.lang=localStorage.getItem("lang")|| "en";
    this.auth.getlogin().subscribe((val)=>{
      this.regester=val
    })
    this.auth.getValueForSubMenu().subscribe((val)=>{
      this.valueshwoSubMenu=val;
      //console.log(this.valueshwoSubMenu)
    }) 
    this.auth.getClosemenu().subscribe((val)=>{
      this.openMenu=val;
      this.openMenuMobile=val;

     
    })
     this.auth.getMenuHeaderProductOpen().subscribe((val)=>{
      this.isMenuProductOpen=val
     })
  }


  changeLang(lang:any){
    const selectedLanguage=lang.target.value;
    localStorage.setItem("lang",selectedLanguage)
    this.translateService.use(selectedLanguage)
  }
  
  
  toggele(){
    this.isMenuProductOpen= ! this.isMenuProductOpen
  }
  togglemobile(){
    this.openMenuMobile=!this.openMenuMobile;
    this.auth.changemenuMobile(this.openMenuMobile)

  }

  searchProducts(query:KeyboardEvent){

    
    if(query){
      if(query.key==='Enter'){
        const element=query.target as HTMLInputElement;
        this.route.navigate([`/search/${element.value}`])


      }else{
        const element=query.target as HTMLInputElement;
        //console.log(element.value)
        this.prod.searchProduct(element.value).subscribe((result:any)=>{
          console.log(result)
          if(result.length>5){
            result.length=5;
        
          }
          this.searchResult=result.data
        })
      }

    }

  }
  hideSearch(){
    this.searchResult=undefined;
    this.showSearchBox=false
  }
  loadSearch(name:any){
   // console.log(name)
    this.route.navigate([`/search/${name}`])
  }
 
  autoCloseForDropdownCars(event) {
    var target = event.target;
    if (!target.closest(".allList")) { 
       this.openMenu=false
         // do whatever you want here
    }
 }
 autoCloseHeaderProducts(event){
  var target = event.target;
  if (!target.closest(".poroducts-menu")){
this.isMenuProductOpen=false
  }
 }
GoProfile(){
  let token=localStorage.getItem("token")
  if(token===null){
this.route.navigate([`/auth`])
  }else{
this.route.navigate([`/myaccount`])

  }
}
logOut() { 
  //console.log(localStorage.getItem("token"))
  this.regester=true
  this.auth.logOut().subscribe((result) => {
    console.log(result)
     localStorage.removeItem('token');
    
     this.route.navigate(['/home'])

  })
}



}
