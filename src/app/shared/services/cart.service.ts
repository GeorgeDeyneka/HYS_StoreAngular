import { LocalStorageService } from './local-storage.service';
import { Product } from './../../models/interfaces/products.interface';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public arrCart: Product[] =
    this.localStorageService.getData<Product[]>('cartData') || [];

  public arrCartCount: Product[];

  constructor(private localStorageService: LocalStorageService) {}

  setData(elem: Product): void {
    this.arrCart.push(elem);
    this.transformData()
    this.localStorageService.setData<Product[]>('cartData', this.arrCart);
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

  calculateTotalPrice() {
    return this.getData().reduce((acc, el) => (acc += el.price * el.count!), 0);
  }

  checkProduct(prod: Product) {
    const data = this.arrCart;
    return data.filter((el) => el.id === prod.id).length;
  }

  getData(): Product[] {
    this.transformData();
    return this.arrCartCount;
  }

  plusCounter(elem: Product) {
    this.setData(elem);
  }

  minusCounter(elem: Product) {
    let index: number = 0;
    this.arrCart.forEach((item, i) => {
      if (JSON.stringify(item) === JSON.stringify(elem)) {
        index = i;
      }
    });
    this.arrCart.splice(index, 1);
    this.transformData()
    this.localStorageService.setData<Product[]>('cartData', this.arrCart);
  }

  deleteProduct(prod: Product): void {
    this.arrCart = this.arrCart.filter((el) => el.id !== prod.id);
    this.localStorageService.setData<Product[]>('cartData', this.arrCart);
  }

  addToCart(elem: Product): void {
    this.arrCart.push(elem);
    this.localStorageService.setData<Product[]>('cartData', this.arrCart);
  }

  clearCart() {
    this.localStorageService.removeAllData('cartData');
    return (this.arrCart = []);
  }
}
