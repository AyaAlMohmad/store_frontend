import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentacationService } from 'src/app/services/authentacation.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  
  constructor(private auth:AuthentacationService , private route:Router){}



  
  ngOnInit(): void {
    
  }
  clickProducts(){
    this.auth.changeValueForSubMenu(true);
    
  }
// دالة لإعادة تحميل الصفحة وإخفاء القائمة
reloadPageAndHideMenu() {
  this.auth.reloadPageAndHideMenu();
}



 
  goAccount(){
    let token=localStorage.getItem("token");
    if(token===null){
      this.route.navigate(['/auth'])
    }else{
      this.route.navigate(['/myaccount'])
    }
  
   }
   goOrder(){
    let token=localStorage.getItem("token");
    if(token===null){
      this.route.navigate(['/auth'])
    }else{
      this.route.navigate(['/orders'])
    }
   }
  
}
