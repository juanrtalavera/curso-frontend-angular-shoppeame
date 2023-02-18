import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageGestionComponent } from './pages/page-gestion/page-gestion/page-gestion.component';
import { PageProductsComponent } from './pages/page-product/page-products/page-products.component';
import { PageHomeComponent } from './pages/page-home/page-home/page-home.component';
import { PageProductDetailComponent } from './pages/page-product-detail/page-product-detail/page-product-detail.component';



const routes: Routes = [
  {path:"",component:PageHomeComponent},
  {path:"products",component:PageProductsComponent},
  {path:"gestion",component:PageGestionComponent},
  {path:"products/:id",component:PageProductDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }