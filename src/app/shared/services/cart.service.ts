import { LocalStorageService } from './local-storage.service';
import { Product } from './../../models/interfaces/products.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public arrCart: Product[] =
    this.localStorageService.getData<Product[]>('cartData') || [];

  private countArr: [Product, number][];

  constructor(private localStorageService: LocalStorageService) {}

  setData(elem: Product): void {
    this.arrCart.push(elem);
    this.transformData();
    this.localStorageService.setData<Product[]>('cartData', this.arrCart);
  }

  transformData() {
    let collection = new Map();
    this.arrCart.forEach((item) => {
      let count = this.arrCart.filter((elem) => elem.id === item.id).length;
      collection.set(item, count);
    });
    const changeData: [Product, number][] = Array.from(collection);
    this.countArr = [
      ...new Set(changeData.map((el) => JSON.stringify(el))),
    ].map((el) => JSON.parse(el));
  }

  // Exp
  
  checkProduct(elem: Product, text: string): string | void {
    const data = this.arrCart;
    if (data.find(() => JSON.stringify(elem))) {
      return (text = 'In Cart');
    }
  }

  calculateTotalPrice() {
    return this.getData().reduce((acc, el) => (acc += el[0].price * el[1]), 0);
  }

  getData(): [Product, number][] {
    this.transformData();
    return this.countArr;
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
    this.transformData();
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
