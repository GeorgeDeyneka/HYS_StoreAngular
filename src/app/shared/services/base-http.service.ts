import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root',
})
export class BaseHttpService {
  protected path: string = '';
  private BASE_URL: string = BASE_URL;

  constructor(private http: HttpClient) {}

  getList<T>(params: string = ''): Observable<T> {
    return this.http.get<T>(this.BASE_URL + this.path + params);
  }

  getById<T>(id: string | number): Observable<T> {
    return this.http.get<T>(this.BASE_URL + this.path + id);
  }

  create<T>(data: T): Observable<T> {
    return this.http.post<T>(this.BASE_URL + this.path, data);
  }

  delete<T>(id: string | number): Observable<T> {
    return this.http.delete<T>(this.BASE_URL + this.path + id);
  }

  update<T>(id: string | number, data: T) {
    return this.http.put<T>(this.BASE_URL + this.path + id, data);
  }
}
