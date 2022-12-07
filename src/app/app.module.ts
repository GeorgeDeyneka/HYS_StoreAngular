import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LandingComponent } from './landing/landing.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './landing/header-bar/header-bar.component';
import { FooterComponent } from './landing/footer/footer.component';
import { ProductsComponent } from './landing/products/products.component';
import { ProductItemComponent } from './landing/products/product-item/product-item.component';
import { AddButtonComponent } from './landing/products/add-button/add-button.component';
import { UahPipe } from './uah.pipe';
import { HighlightPriceDirective } from './highlight-price.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    FooterComponent,
    ProductsComponent,
    ProductItemComponent,
    AddButtonComponent,
    LandingComponent,
    UahPipe,
    HighlightPriceDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
