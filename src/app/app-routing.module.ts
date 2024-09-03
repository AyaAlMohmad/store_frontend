import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SliderComponent } from './slider/slider.component';
import { HeaderComponent } from './header/header.component';


import { HeaderProductComponent } from './header-product/header-product.component';
import { OfficeComponent } from './classifications/office/office.component';

import { HospitalityComponent } from './classifications/hospitality/hospitality.component';

import { TradeContractComponent } from './menu/trade-contract/trade-contract.component';
import { CareersComponent } from './menu/careers/careers.component';
import { ContactComponent } from './menu/contact/contact.component';
import { ProjectComponent } from './menu/project/project.component';
import { CatalogComponent } from './menu/catalog/catalog.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

import { MobileSearchComponent } from './mobile-search/mobile-search.component';
import { SearchComponent } from './search/search.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ValuesComponent } from './values/values.component';
import { HistoryComponent } from './history/history.component';
import { OrdersComponent } from './orders/orders.component';
import { CartComponent } from './cart/cart.component';
import { FormCareersComponent } from './form-careers/form-careers.component';
import { MyacountComponent } from './myacount/myacount.component';
import { ProfileGuard } from './profile.guard';
import { FooterComponent } from './footer/footer.component';
import { PrivcyComponent } from './privcy/privcy.component';
import { InvestorsComponent } from './investors/investors.component';
import { OutdoorComponent } from './classifications/outdoor/outdoor.component';
import { SchoolComponent } from './classifications/school/school.component';
import { AboutComponent } from './about/about.component';

import { SolutionComponent } from './solution/solution.component';
import { VillasComponent } from './villas/villas.component';
import { VilladetailsComponent } from './villadetails/villadetails.component';

const routes: Routes = [
 {path:"",component:HomeComponent},
  {path:'auth',component:AuthComponent},
  {path:'home',component:HomeComponent},
  {path:"products",component:ProductsComponent},
  {path:"products/:id",component:ProductsComponent},
  {path:"header",component:HeaderComponent},
  {path:"product-details",component:ProductDetailsComponent},
  {path:"product-details/:id",component:ProductDetailsComponent},
  
  {path:"slider",component:SliderComponent},
  {path:"contact",component:ContactComponent},
  {path:"office",component:OfficeComponent},
  
  {path:"outdoor",component:OutdoorComponent},
  {path:"school",component:SchoolComponent},
  {path:"hospitality",component:HospitalityComponent},
  {path:"contract",component:TradeContractComponent},
  {path:"careers",component:CareersComponent},
  {path:"formcareer",component:FormCareersComponent},
  {path:"projects",component:ProjectComponent},
  {path:"project-details/:id",component:ProjectDetailsComponent},
  {path:"catalog",component:CatalogComponent},
  {path:"villas",component:VillasComponent},
  {path:"villa-details/:id",component:VilladetailsComponent},
  {path:"search",component:MobileSearchComponent},
  {path:"search/:name",component:SearchComponent},
  {path:"faqs",component:FaqsComponent},
  {path:"values",component:ValuesComponent},
  {path:"history",component:HistoryComponent},
  {path:"orders",component:OrdersComponent,canActivate: [ProfileGuard]},
  {path:"orders/:id",component:OrdersComponent,canActivate: [ProfileGuard]},
  {path:"myaccount",component:MyacountComponent,canActivate: [ProfileGuard]}, 
  {path:"footer",component:FooterComponent},
  {path:"privcy",component:PrivcyComponent},
  {path:"investors",component:InvestorsComponent},
  {path:"about",component:AboutComponent},
  {path:"solution",component:SolutionComponent},
  {path:"hproducts",component:HeaderProductComponent}
  
];
// 
@NgModule({
  // imports: [ RouterModule.forRoot(routes,{ scrollPositionRestoration: 'top'}) ,RouterModule.forRoot(routes,{ useHash: true }) ],
  imports: [
    RouterModule.forRoot(routes, {
       useHash: true,
       scrollPositionRestoration: 'top',
       onSameUrlNavigation: 'reload'
    })
   ]
   ,
  exports: [RouterModule]
})
export class AppRoutingModule { }
