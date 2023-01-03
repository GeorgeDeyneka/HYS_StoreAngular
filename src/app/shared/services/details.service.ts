import { Product } from './../../models/interfaces/products.interface';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  public product: Product;
  public data: Product[] = [];

  constructor(private router: Router) {}

  getData(id: string, data: Product[]): Product {
    this.data = data;
    this.checkData(id);
    return this.product;
  }

  checkData(id: string) {
    if (this.data.length) {
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].id === +id) {
          this.product = this.data[i];
        }
      }
      if (!this.product) {
        this.router.navigateByUrl('404-page');
      }
    }
  }
}
