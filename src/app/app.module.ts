import { LoginModule } from './pages/login/login.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AdministrationModule } from './pages/administration/administration.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from './pages/store/store.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdministrationModule,
    StoreModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
