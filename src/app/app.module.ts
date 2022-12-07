import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';
import { LandingComponent } from './landing/landing.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './landing/header-bar/header-bar.component';
import { FooterComponent } from './landing/footer/footer.component';
import { ProductsModule } from './landing/products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    FooterComponent,
    LandingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, ProductsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
