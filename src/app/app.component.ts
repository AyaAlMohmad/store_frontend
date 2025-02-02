import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MaisonCeil';

  constructor(private translateService:TranslateService){
   this.translateService.setDefaultLang("en");
   this.translateService.use(localStorage.getItem("lang") || "en")
   
  }

  // switchLanguage(language:string){
  //   this.translate.use(language)
  // }
}
