import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseHttpService {
  protected path: string = '';
  private BASE_URL: string = 'https://hys-fe-course-api.vercel.app/';

  constructor(private http: HttpClient) {}

  getData<T>(): Observable<T> {
    return this.http.get<T>(this.BASE_URL + this.path);
  }

  getElemById<T>(id: string): Observable<T> {
    return this.http.get<T>(this.BASE_URL + this.path + id);
  }
}
