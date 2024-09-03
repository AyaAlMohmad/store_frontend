import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HammerModule } from '@angular/platform-browser';
import { IgxCarouselModule } from 'igniteui-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';

import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SliderComponent } from './slider/slider.component';
import { AuthComponent } from './auth/auth.component';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderProductComponent } from './header-product/header-product.component';
import { MainMenuComponent } from './menu/main-menu/main-menu.component';
import { OfficeComponent } from './classifications/office/office.component';
import { HospitalityComponent } from './classifications/hospitality/hospitality.component';

import { SideProductComponent } from './side-product/side-product.component';
import { TradeContractComponent } from './menu/trade-contract/trade-contract.component';
import { CareersComponent } from './menu/careers/careers.component';
import { ContactComponent } from './menu/contact/contact.component';
import { ProjectComponent } from './menu/project/project.component';
import { CatalogComponent } from './menu/catalog/catalog.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MobileSearchComponent } from './mobile-search/mobile-search.component';
import { SearchComponent } from './search/search.component';
import { ValuesComponent } from './values/values.component';
import { FaqsComponent } from './faqs/faqs.component';
import { HistoryComponent } from './history/history.component';
import { OrdersComponent } from './orders/orders.component';
import { CartComponent } from './cart/cart.component';
import { FormCareersComponent } from './form-careers/form-careers.component';
import { MatChipsModule } from '@angular/material/chips';
import { ToastrModule } from 'ngx-toastr';
import { MyacountComponent } from './myacount/myacount.component';
import { FooterComponent } from './footer/footer.component';
import { PrivcyComponent } from './privcy/privcy.component';
import { InvestorsComponent } from './investors/investors.component';
import { OutdoorComponent } from './classifications/outdoor/outdoor.component';
import { SchoolComponent } from './classifications/school/school.component';
import { AboutComponent } from './about/about.component';

import { SolutionComponent } from './solution/solution.component';
import { VillasComponent } from './villas/villas.component';
import { VilladetailsComponent } from './villadetails/villadetails.component';




export function HttpLoaderFactory(http:HttpClient){
return new TranslateHttpLoader(http)
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    
    HomeComponent,
    ProductDetailsComponent,
    SliderComponent,
    AuthComponent,
    
    HeaderProductComponent,
    MainMenuComponent,
    OfficeComponent,
    
    HospitalityComponent,
   
    SideProductComponent,
    TradeContractComponent,
    CareersComponent,
    ContactComponent,
    ProjectComponent,
    CatalogComponent,
    ProjectDetailsComponent,
    
    MobileSearchComponent,
    SearchComponent,
    ValuesComponent,
    FaqsComponent,
    HistoryComponent,
    OrdersComponent,
    CartComponent,
    FormCareersComponent,
    MyacountComponent,
    FooterComponent,
    PrivcyComponent,
    InvestorsComponent,
    OutdoorComponent,
    SchoolComponent,
    AboutComponent,
    SolutionComponent,
    VillasComponent,
    VilladetailsComponent,
    
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastrModule,
    BrowserAnimationsModule, HammerModule, IgxCarouselModule,
    HttpClientModule,
    MatChipsModule,
  
    TranslateModule.forRoot({
     // defaultLanguage:"en",
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient]
      }
    })
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
