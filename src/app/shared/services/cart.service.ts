import { LocalStorageService } from './local-storage.service';
import { Product } from './../../models/interfaces/products.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public arrCart: Product[] =
    this.localStorageService.getData<Product[]>('cartData') || [];

  constructor(private localStorageService: LocalStorageService) {}

  addToCart(data: Product): void {
    this.arrCart.push(data);
    this.localStorageService.setData<Product[]>('cartData', this.arrCart);
  }

  clearCart(): Product[] {
    this.localStorageService.removeAllData('cartData');
    return this.arrCart = [];
  }

  deleteFromCart() {
  }
}
