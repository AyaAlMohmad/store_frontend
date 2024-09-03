import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentacationService {
 





  

   mySend = new BehaviorSubject<boolean>(false);
   // بحيث يقوم مكون بتغيير هذه القيمة المخزنة ويقوم مكون اخر بالاشتراك بهذا المتغير لتصله القيمة الجديدة عند تغيرها behaviorSubject  انشئنا متغير من نوع 
   IscloseMenu=new BehaviorSubject<boolean>(false);
   MenuHeaderProductOpen=new BehaviorSubject<boolean>(false);
   login= new BehaviorSubject<boolean>(true);
   menuMobile= new BehaviorSubject<boolean>(true);
   closeHeaderProducts= new BehaviorSubject<boolean>(true);
// ?? 

private menuItemClicked = new BehaviorSubject<boolean>(false);

  //currentValue = this.valueSource.asObservable();

  constructor(private http:HttpClient) { }
  changecloseHeaderProducts(newValue: boolean) {
    this.closeHeaderProducts.next(newValue);//next من خلال الدالة  behaviorSubject  يتم تغيير قيمة متغيير من نوع  
    //الدالة التي يستدعيها المكون عندما يريد تغيير القيمة
  }
  
  getcloseHeaderProducts():Observable<boolean>{
return this.closeHeaderProducts.asObservable()
//  الخاصة بالمكون  ngOnit  الدالة التي يستدعيها المكون الذي يريد متابعة تغيير القيمة عن طريق استدعاء هذه الدالة داخل  
// getcloseHeaderProducts().subscribe((res)=>{  })  يتم الاشتراك كمثال     
//  تعيد القيمة المتغيرة الجديدة res 
// للمتغير الموجود داخل المكون الذي عليه نعتمد لاظهار او اخفاء القائمة مثلا او اي شئ  res  يتم اسناد 
//behaviorSubject هذا مثال واحد وعليه قمت بانشاء باقي المتعيرات من نوع 
}




  changemenuMobile(newValue: boolean) {
    this.menuMobile.next(newValue);
  }
  
  getmenuMobile():Observable<boolean>{
return this.menuMobile.asObservable()
  }
  changeValueForSubMenu(newValue: boolean) {
    this.mySend.next(newValue);
  }
  
  getValueForSubMenu():Observable<boolean>{
return this.mySend.asObservable()
  }
  changeCloseMenu(newValue: boolean) {
    this.IscloseMenu.next(newValue);
  }
  
  getClosemenu():Observable<boolean>{
return this.IscloseMenu.asObservable()
  }
 // دالة للتحقق من النقر على عنصر القائمة
  menuItemClickedEvent() {
    this.menuItemClicked.next(true);
  }



  // دالة للاشتراك في حدث النقر على عنصر القائمة
  subscribeToMenuItemClicked(): Observable<boolean> {
    return this.menuItemClicked.asObservable();
  }


  changeMenuHeaderProductOpen(newValue: boolean) {
    this.MenuHeaderProductOpen.next(newValue);
  }
  getMenuHeaderProductOpen():Observable<boolean>{
    return this.MenuHeaderProductOpen.asObservable()
      }
      changelogin(newValue: boolean) {
        this.login.next(newValue);
      }
      getlogin():Observable<boolean>{
        return this.login.asObservable()
          }
  
  //*************************** */
  postRegister(data:any){
    // ارسال معلومات تسجيل الدخول لمستخدم جديد
    let lang = localStorage.getItem("lang") || "en"// localStorage في   lang بحيث قمت سابقا بتخزين  api التي تدل على اللغة المختارة وبدونا لا تعمل  lang في كل الطلبات نرسل قيمة 
    const headers = new HttpHeaders().set('Accept-Language',lang) // الخاص بالطلب header في   token   هكذا يتم ارسال 
return this.http.post("https://maisonciel.com.tr/api/auth/register",data,{headers})// هي المعلومات التي ادخلها المستخدم واريد ارسالها الى القاعدة ليتم حفظها Data  
  }
  postLogin(data:any){
    //ارسال معلومات لتسجيل الدخول لمستخدم سابق
    let lang = localStorage.getItem("lang") || "en"
    const headers = new HttpHeaders().set('Accept-Language',lang)
return this.http.post("https://maisonciel.com.tr/api/auth/login",data,{headers})
  }

  logOut(){
    //تسجيل الخروج
    let lang = localStorage.getItem("lang") || "en"
    let token=localStorage.getItem("token")
   const headers = new HttpHeaders()
   .set('Authorization',`Bearer ${token}`).set('Accept-Language',lang);
    return this.http.post("https://maisonciel.com.tr/api/logout",{},{headers})
  }


  GetUserProflie(){
    // جلب معلومات الحساب للمستخدم
    
    let token=localStorage.getItem("token")
    const headers = new HttpHeaders()
    .set('Authorization',`Bearer ${token}`);
    
    return this.http.get("https://maisonciel.com.tr/api/user_profile",{headers})
  }



// دالة لإعادة تحميل الصفحة وإخفاء القائمة
reloadPageAndHideMenu() {
  window.location.reload();
  this.IscloseMenu.next(true);
}


}
