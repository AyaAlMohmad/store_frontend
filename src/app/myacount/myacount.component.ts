import { Component, OnInit } from '@angular/core';
import { AuthentacationService } from '../services/authentacation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myacount',
  templateUrl: './myacount.component.html',
  styleUrls: ['./myacount.component.css']
})
export class MyacountComponent implements OnInit {

  myAcount: any[] = []
name:string=""
email:string=""
  constructor(private auth: AuthentacationService,private route:Router) { }
  ngOnInit(): void {
    this.auth.changeCloseMenu(false)
    this.auth.GetUserProflie().subscribe((result: any) => {
      console.log(result)
      this.name = result.name
      this.email = result.email

    })


  }
  logOut() { 
    //console.log(localStorage.getItem("token"))
    this.auth.logOut().subscribe((result) => {
      console.log(result)
       localStorage.removeItem('token');
       this.route.navigate(['/home'])

    })
  }

}
