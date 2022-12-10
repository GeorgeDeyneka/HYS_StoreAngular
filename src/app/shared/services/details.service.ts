import { Product } from './../../models/interfaces/products.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  public product: Product;

  constructor() {}

  getData(): Product {
    if (!this.product && sessionStorage.getItem('details') != null) {
      return JSON.parse(sessionStorage.getItem('details')!);
    }
    return this.product;
  }

  setData(data: Product): void {
    sessionStorage.setItem('details', JSON.stringify(data));
    this.product = data;
  }
}
