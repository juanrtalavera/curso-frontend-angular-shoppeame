import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer/footer.component';
import { HeaderComponent } from './header/header/header.component';
import { PageGestionComponent } from './pages/page-gestion/page-gestion/page-gestion.component';
import { PageHomeComponent } from './pages/page-home/page-home/page-home.component';
import { PageProductsComponent } from './pages/page-product/page-products/page-products.component';
import { PageProductDetailComponent } from './pages/page-product-detail/page-product-detail/page-product-detail.component';
import { GalleryComponent } from './shared/components/gallery/gallery/gallery.component';
import { StarComponent } from './shared/components/star/star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PageGestionComponent,
    PageHomeComponent,
    PageProductsComponent,
    PageProductDetailComponent,
    GalleryComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
