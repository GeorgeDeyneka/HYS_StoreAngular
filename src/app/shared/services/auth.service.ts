import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public URL = 'https://hys-fe-course-api.vercel.app/auth/login';

  constructor(
    private localStorageService: LocalStorageService,
    private http: HttpClient
  ) {}

  setAuthToken(token: String) {
    this.localStorageService.setData('authToken', token);
  }
  getAuthToken() {
    return this.localStorageService.getData('authToken');
  }
  logIn<T>(data: any) {
    return this.http.post<T>(this.URL, data);
  }
}
