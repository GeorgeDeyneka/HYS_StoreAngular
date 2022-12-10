import { LocalStorageService } from './local-storage.service';
import { Product } from './../../models/interfaces/products.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public arrCart: Product[] =
    this.localStorageService.getData('cartData') || [];

  constructor(private localStorageService: LocalStorageService) {}

  addToCart(data: Product) {
    this.arrCart.push(data);
    this.localStorageService.setData('cartData', this.arrCart);
  }

  deleteFromCart() {
  }
}
