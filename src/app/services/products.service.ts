import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getAllProducts(id:any){

    let lang = localStorage.getItem("lang") || "en"
    const headers = new HttpHeaders().set('Accept-Language',lang)
    return this.http.get(`https://maisonciel.com.tr/api/produts/${id}`,{headers})
  
  }
  showProduct(id:any){
    let lang = localStorage.getItem("lang") || "en"
 const headers = new HttpHeaders().set('Accept-Language',lang);
 return this.http.get(`https://maisonciel.com.tr/api/produt/${id}`,{headers})
  }
  getSub_categorywithnamecategory(name:any){
    let lang = localStorage.getItem("lang") || "en"
 const headers = new HttpHeaders().set('Accept-Language',lang);
 return this.http.get(`https://maisonciel.com.tr/api/sub_category?name=${name}`,{headers})

  }
  getIndex_Category(){
    let lang = localStorage.getItem("lang") || "en"
 const headers = new HttpHeaders().set('Accept-Language',lang)
    return this.http.get("https://maisonciel.com.tr/api/categories",{headers})
  }
  getIndexSubCategory(){
    let lang = localStorage.getItem("lang") || "en"
    const headers = new HttpHeaders().set('Accept-Language',lang)
    return this.http.get("https://maisonciel.com.tr/api/sub_categories",{headers}) 
  }
  searchProduct(query:any){
    let lang = localStorage.getItem("lang") || "en"
    const headers = new HttpHeaders().set('Accept-Language',lang)
    return this.http.get(`https://maisonciel.com.tr/api/search?keyword=${query}`,{headers})
  }
  getValues(){
    let lang = localStorage.getItem("lang") || "en"
 const headers = new HttpHeaders().set('Accept-Language',lang)
    return this.http.get("https://maisonciel.com.tr/api/values",{headers})
  }
  getFAQ_s(){
    let lang = localStorage.getItem("lang") || "en"
    const headers = new HttpHeaders().set('Accept-Language',lang)
    return this.http.get("https://maisonciel.com.tr/api/faqs",{headers})

  }
  getHistory(){
    let lang = localStorage.getItem("lang") || "en"
    const headers = new HttpHeaders().set('Accept-Language',lang)
    return this.http.get("https://maisonciel.com.tr/api/histories",{headers})


  }
  getProjects(){
    let lang = localStorage.getItem("lang") || "en"
    const headers = new HttpHeaders().set('Accept-Language',lang);
    return this.http.get("https://maisonciel.com.tr/api/Project",{headers})

  }




   getVillas(){
    let lang = localStorage.getItem("lang") || "en"
     const headers = new HttpHeaders().set('Accept-Language',lang);
    return this.http.get("https://maisonciel.com.tr/api/Villa",{headers})

   }



   getVillaDetails(id:any){
    let lang = localStorage.getItem("lang") || "en"
    const headers = new HttpHeaders().set('Accept-Language',lang);
    return this.http.get(`https://maisonciel.com.tr/api/Villa/${id}`,{headers})
    		
  }



  getProjectDetails(id:any){
    let lang = localStorage.getItem("lang") || "en"
    const headers = new HttpHeaders().set('Accept-Language',lang);
    return this.http.get(`https://maisonciel.com.tr/api/Project/${id}`,{headers})
    		
  }



  getTradeandContract(){
    let lang = localStorage.getItem("lang") || "en"
    const headers = new HttpHeaders().set('Accept-Language',lang);
    return this.http.get("https://maisonciel.com.tr/api/trades",{headers})
  }
  getIndexCareers(){
    let lang = localStorage.getItem("lang") || "en"
    const headers = new HttpHeaders().set('Accept-Language',lang);
    return this.http.get("https://maisonciel.com.tr/api/careers",{headers})
  }
  getDatapolicy(){
    let lang = localStorage.getItem("lang") || "en"
    const headers = new HttpHeaders().set('Accept-Language',lang);
    return this.http.get("https://maisonciel.com.tr/api/DataPolicy",{headers})
  }
  getCookiePolicy(){
    let lang = localStorage.getItem("lang") || "en"
    const headers = new HttpHeaders().set('Accept-Language',lang);
    return this.http.get("https://maisonciel.com.tr/api/CookiePolicy",{headers}) 
  }
  getSocial(){
    let lang = localStorage.getItem("lang") || "en"
    const headers = new HttpHeaders().set('Accept-Language',lang);
    return this.http.get("https://maisonciel.com.tr/api/Social",{headers})
  }
  getContact(){ 
    
    return this.http.get("https://maisonciel.com.tr/api/Contact") 
  }
  getAboutUs(){
    let lang = localStorage.getItem("lang") || "en"
    const headers = new HttpHeaders().set('Accept-Language',lang);
    return this.http.get("https://maisonciel.com.tr/api/About",{headers})
  }
  postOrderJop(form:any){
    let lang = localStorage.getItem("lang") || "en"
    const headers = new HttpHeaders().set('Accept-Language',lang);
    return this.http.post("https://maisonciel.com.tr/api/career/store",form,{headers})

  }
  getCatalog(){
    let lang = localStorage.getItem("lang") || "en"
    const headers = new HttpHeaders().set('Accept-Language',lang);
    return this.http.get("https://maisonciel.com.tr/api/catalog",{headers})
  }
  OrderProducts(id:any){
    let lang = localStorage.getItem("lang") || "en";
    let token=localStorage.getItem("token")
   
    const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`).set('Accept-Language',lang);
    return this.http.post(`https://maisonciel.com.tr/api/order/store/${id}`,{},{headers})

  }






  OrderIndex(){ 
    let lang = localStorage.getItem("lang") || "en";
    let token=localStorage.getItem("token")
    const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`).set('Accept-Language',lang);
 
  

    return this.http.get("https://maisonciel.com.tr/api/orders",{headers})
  }


 
 
 
 
 
 
  FilterMaterialProducts(id:any,material:string){
    let lang = localStorage.getItem("lang") || "en"
    const headers = new HttpHeaders().set('Accept-Language',lang);
    return this.http.get(`https://maisonciel.com.tr/api/products/material/${id}?material=${material}`,{headers})
  }


  FilterByASC(id:any){
    let lang = localStorage.getItem("lang") || "en"
    const headers = new HttpHeaders().set('Accept-Language',lang);
    return this.http.get(`https://maisonciel.com.tr/api/products/asc/${id}`,{headers})
  }
  FilterByDASC(id:any){
    let lang = localStorage.getItem("lang") || "en"
    const headers = new HttpHeaders().set('Accept-Language',lang);
    return this.http.get(`https://maisonciel.com.tr/api/products/desc/${id}`,{headers})
  }
  getInvestors(){
    let lang = localStorage.getItem("lang") || "en"
    const headers = new HttpHeaders().set('Accept-Language',lang);
    return this.http.get(`https://maisonciel.com.tr/api/Investors`,{headers}) 
  }
  getOffice(){
    let lang = localStorage.getItem("lang") || "en"
    const headers = new HttpHeaders().set('Accept-Language',lang);
    return this.http.get(`https://maisonciel.com.tr/api/sub_category_office_furniture`,{headers})  
  }
  getoutdoor(){
    let lang = localStorage.getItem("lang") || "en"
    const headers = new HttpHeaders().set('Accept-Language',lang);
    return this.http.get(`https://maisonciel.com.tr/api/sub_category_outdoor_furniture`,{headers})
  }
  getSchool(){
    let lang = localStorage.getItem("lang") || "en"
    const headers = new HttpHeaders().set('Accept-Language',lang);
    return this.http.get(`https://maisonciel.com.tr/api/sub_category_School_furniture`,{headers})
  }
  getHospitality(){
    let lang = localStorage.getItem("lang") || "en"
    const headers = new HttpHeaders().set('Accept-Language',lang);
    return this.http.get(`https://maisonciel.com.tr/api/sub_category_hospitality_furniture`,{headers})
  }
  getSolution(){
    let lang = localStorage.getItem("lang") || "en"
    const headers = new HttpHeaders().set('Accept-Language',lang); 
    return this.http.get(`https://maisonciel.com.tr/api/solutions`,{headers})

  }
  GetService(){
    let lang = localStorage.getItem("lang") || "en"
    const headers = new HttpHeaders().set('Accept-Language',lang);
    return this.http.get(`https://maisonciel.com.tr/api/DesignService`,{headers})

  }

}
