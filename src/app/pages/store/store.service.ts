import { ProductType } from '../../models/interfaces/product.interface';
import { BaseHttpService } from './../../shared/services/base-http.service';
import { PRODUCTS_STATE } from '../../data/state';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService extends BaseHttpService {

  override path = 'products'

  private staticData: ProductType[] = PRODUCTS_STATE || this.createRandomData(8);

  createRandomData(n: number) {
    const arr: ProductType[] = [];

    for (let i = 1; i <= n; i++) {
      const randomStr: string = (Math.random() + 1).toString(36).substring(2);
      const randomNum: number =
        Math.floor(Math.random() * (2000 - 1000)) + 1000;

      const obj: ProductType = {
        id: i.toString(),
        name: randomStr,
        price: randomNum,
        author: 'George',
        description: randomStr
      };

      arr.push(obj);
    }
    return arr;
  }

  get data(): Observable<ProductType[]> {
    return of(this.staticData).pipe(delay(400));
  }
}
