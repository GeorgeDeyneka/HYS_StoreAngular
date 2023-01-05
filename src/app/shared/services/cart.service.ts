import { HttpProduct } from './../../models/interfaces/http-product.interface';
import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public arrCart: HttpProduct[] =
    this.localStorageService.getData<HttpProduct[]>('cartData') || [];

  public arrCartCount: HttpProduct[];

  constructor(private localStorageService: LocalStorageService) {}

  setData(elem: HttpProduct): void {
    this.arrCart.push(elem);
    this.transformData();
    this.localStorageService.setData<HttpProduct[]>('cartData', this.arrCart);
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

  checkProduct(prod: HttpProduct) {
    const data = this.arrCart;
    return data.filter((el) => el.id === prod.id).length;
  }

  getData(): HttpProduct[] {
    this.transformData();
    return this.arrCartCount;
  }

  plusCounter(elem: HttpProduct) {
    this.setData(elem);
  }

  minusCounter(elem: HttpProduct) {
    let index: number = 0;
    this.arrCart.forEach((item, i) => {
      if (JSON.stringify(item) === JSON.stringify(elem)) {
        index = i;
      }
    });
    this.arrCart.splice(index, 1);
    this.transformData();
    this.localStorageService.setData<HttpProduct[]>('cartData', this.arrCart);
  }

  deleteProduct(prod: HttpProduct): void {
    this.arrCart = this.arrCart.filter((el) => el.id !== prod.id);
    this.localStorageService.setData<HttpProduct[]>('cartData', this.arrCart);
  }

  addToCart(elem: HttpProduct): void {
    this.arrCart.push(elem);
    this.localStorageService.setData<HttpProduct[]>('cartData', this.arrCart);
  }

  clearCart() {
    this.localStorageService.removeData('cartData');
    return (this.arrCart = []);
  }
}
