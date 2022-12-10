import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  getData(key: string) {
    if (localStorage.getItem(key) != null) {
      return JSON.parse(localStorage.getItem(key)!);
    }
  }

  setData<T>(key: string, data: T) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
