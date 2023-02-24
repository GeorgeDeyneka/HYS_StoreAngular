import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public URL = 'http://localhost:3000/auth/';

  constructor(
    private localStorageService: LocalStorageService,
    private http: HttpClient
  ) {}

  setAuthToken(token: String) {
    this.localStorageService.setData('token', token);
  }
  getAuthToken(): string | [] {
    return this.localStorageService.getData('token');
  }
  logIn<T>(data: any) {
    return this.http.post<T>(this.URL + 'login', data);
  }
}
