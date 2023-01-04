import { LoginModule } from './pages/login/login.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AdministrationModule } from './pages/administration/administration.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from './pages/store/store.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './shared/services/auth-interceptor.service';
import { ErrorsPagesModule } from './pages/errors-pages/errors-pages.module';

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
    LoginModule,
    ErrorsPagesModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
