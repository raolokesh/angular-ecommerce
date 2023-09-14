import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { CatalogueComponent } from './catalogue/catalogue.component';

const routes: Routes = [
  { path: "" , component: HomeComponent},
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "shop",component:ShopComponent} ,
  {path: "product/:data",component:ProductsComponent},
  { path: "cart",component:CartComponent},
  {path: "catalogue",component:CatalogueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
