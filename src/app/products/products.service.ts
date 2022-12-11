import { PRODUCTS_STATE } from './../data/state';
import { Product } from '../models/interfaces/products.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public productsData: Product[] = PRODUCTS_STATE || this.createRandomData;

  constructor() {}

  createRandomData(n: number) {
    const arr: Product[] = [];

    for (let i = 1; i <= n; i++) {
      const randomStr: string = (Math.random() + 1).toString(36).substring(2);
      const randomNum: number =
        Math.floor(Math.random() * (2000 - 1000)) + 1000;

      const obj: Product = {
        id: i,
        name: randomStr,
        price: randomNum,
      };

      arr.push(obj);
    }
    return arr;
  }

  getData() {
    return this.productsData;
  }
}
