import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authToken = this.authService.getAuthToken();

    if (authToken) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${authToken}`),
      });
      return next.handle(authReq);
    }

    return next.handle(req);
  }
}
