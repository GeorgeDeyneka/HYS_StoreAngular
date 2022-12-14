import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authToken = this.authService.getAuthToken();

    if (authToken) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${authToken}`),
      });

      return next.handle(authReq).pipe(
        tap({
          next: (next) => {},
          error: (error) => {
            if (error instanceof HttpErrorResponse) {
              if (error.status === 401 && this.router.url != '/login') {
                this.router.navigateByUrl('error/401');
                this.localStorageService.removeData('authToken');
              }
              if (error.status === 404) {
                this.router.navigateByUrl('error/404');
              }
              if (error.status === 403) {
                this.router.navigateByUrl('error/403');
              }
            }
          },
        })
      );
    }

    return next.handle(req).pipe(
      tap({
        next: (next) => {},
        error: (error) => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401 && this.router.url != '/login') {
              this.router.navigateByUrl('error/401');
              this.localStorageService.removeData('authToken');
            }
            if (error.status === 404) {
              this.router.navigateByUrl('error/404');
            }
            if (error.status === 403) {
              this.router.navigateByUrl('error/403');
            }
          }
        },
      })
    );
  }
}
