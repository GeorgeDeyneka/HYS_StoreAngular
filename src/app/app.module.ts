import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AdministrationModule } from './administration/administration.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from './store/store.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdministrationModule,
    StoreModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
