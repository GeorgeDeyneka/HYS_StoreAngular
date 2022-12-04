import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { HryvniaPipe } from './hryvnia.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    FooterComponent,
    ProductsComponent,
    ProductItemComponent,
    AddButtonComponent,
    HryvniaPipe,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
