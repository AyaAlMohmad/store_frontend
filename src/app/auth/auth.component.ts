import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthentacationService } from '../services/authentacation.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {



logreg:boolean=true;

  constructor(private fb: FormBuilder,private auth:AuthentacationService,private route:Router){}
  loginForm!:FormGroup;
  registerForm!: FormGroup;
  ngOnInit(): void {
    this.auth.changeMenuHeaderProductOpen(false)
    this.auth.changeCloseMenu(false)
    this.loginForm=this.fb.group({
      email:["",[Validators.email,Validators.required]],
      password:["",[Validators.required,Validators.minLength(8)]]
    
    })
     this.registerForm=new FormGroup({
  title:new FormControl("mister",Validators.required),
  name:new FormControl("",Validators.required),
  phone:new FormControl("",Validators.required),
  email:new FormControl("",[Validators.required,Validators.email]),
  password:new FormControl("",[Validators.required,Validators.minLength(8)]),
  confirmPassword:new FormControl("",[Validators.required,Validators.minLength(8)]),
  check1:new FormControl(),
  check2:new FormControl()
     })
  }

  loginSubmit(){
    //console.log(this.loginForm)
   const logForm=new FormData;
   
   logForm.append("email",this.loginForm.value.email);
   logForm.append("password",this.loginForm.value.password);
   

   this.auth.postLogin(logForm).subscribe((res:any)=>{
    console.log(res.message.token)
   const userToken=res.message.token;
    localStorage.setItem("token",userToken);
    this.route.navigate(['/myaccount'])
    console.log(res)
    this.auth.changelogin(false)
    alert("success login")
   })


     }
     registerSubmit(){
    //console.log(this.registerForm)
    const regForm=new FormData;
   regForm.append("name",this.registerForm.value.name);
   regForm.append("email",this.registerForm.value.email);
   regForm.append("password",this.registerForm.value.password);
   regForm.append("gender",this.registerForm.value.title);
   regForm.append("phone",this.registerForm.value.phone);
   regForm.append("password confirmation",this.registerForm.value.confirmPassword);
   
   this.auth.postRegister(regForm).subscribe((res:any)=>{
    console.log(res)
    const userToken=res.data.token;
    localStorage.setItem("token",userToken)
    this.route.navigate(['/myaccount'])
console.log(userToken)
console.log(localStorage.getItem("token"))
this.auth.changelogin(false)
   
   alert("success register")
   })
     }
}

