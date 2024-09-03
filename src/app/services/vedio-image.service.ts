import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VedioImageService {
   
  constructor(private http:HttpClient) { }

 getVedio_Img(){
 let lang = localStorage.getItem("lang") || "en"
 const headers = new HttpHeaders().set('Accept-Language',lang)
  return this.http.get("https://maisonciel.com.tr/api/Image_Video",{headers})

}

 
 
 }

