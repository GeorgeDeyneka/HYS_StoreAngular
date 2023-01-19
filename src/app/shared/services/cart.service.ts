import { ProductType } from '../../models/interfaces/product.interface';
import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public arrCart: ProductType[] =
    this.localStorageService.getData<ProductType[]>('cartData') || [];
  public subj$ = new Subject<ProductType[]>();
  public arrCartCount: ProductType[] = [];

  constructor(private localStorageService: LocalStorageService) {}

  setData(elem: ProductType): void {
    this.arrCart.push(elem);
    this.transformData();
    this.reloadData();
    this.localStorageService.setData<ProductType[]>('cartData', this.arrCart);
  }

  transformData() {
    const copyArr = [...this.arrCart];
    copyArr.forEach(
      (el) =>
        (el['count'] = this.arrCart.filter((item) => item.id === el.id).length)
    );
    this.arrCartCount = [
      ...new Set(copyArr.map((el) => JSON.stringify(el))),
    ].map((el) => JSON.parse(el));
  }

  reloadData() {
    this.subj$.next(this.arrCartCount);
  }

  calculateTotalPrice() {
    return this.getData().reduce((acc, el) => (acc += el.price * el.count!), 0);
  }

  checkProduct(prod: ProductType) {
    const data = this.arrCart;
    return data.filter((el) => el.id === prod.id).length;
  }

  getData(): ProductType[] {
    this.transformData();
    return this.arrCartCount;
  }

  plusCounter(elem: ProductType) {
    this.setData(elem);
  }

  minusCounter(elem: ProductType) {
    let index: number = 0;
    this.arrCart.forEach((item, i) => {
      if (JSON.stringify(item) === JSON.stringify(elem)) {
        index = i;
      }
    });
    this.arrCart.splice(index, 1);
    this.transformData();
    this.reloadData();

    this.localStorageService.setData<ProductType[]>('cartData', this.arrCart);
  }

  deleteProduct(prod: ProductType): void {
    this.arrCart = this.arrCart.filter((el) => el.id !== prod.id);
    this.localStorageService.setData<ProductType[]>('cartData', this.arrCart);
    this.transformData();
    this.reloadData();
  }

  addToCart(elem: ProductType): void {
    this.arrCart.push(elem);
    this.localStorageService.setData<ProductType[]>('cartData', this.arrCart);
    this.transformData()
    this.reloadData()
  }

  clearCart() {
    this.localStorageService.removeData('cartData');
    this.arrCartCount = [];
    this.reloadData();
    return (this.arrCart = []);
  }
}
