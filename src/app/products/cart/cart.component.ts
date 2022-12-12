import { CartService } from './../../shared/services/cart.service';
import { Product } from './../../models/interfaces/products.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public arrCart: [Product, number][];
  public totalPice: number = this.calcPrice()

  constructor(private cartService: CartService) {}

  calcPrice(): number {
    return this.cartService.calculateTotalPrice();
  }

  clearCart(): void {
    this.arrCart = this.cartService.clearCart();
  }

  ngOnInit(): void {
    this.arrCart = this.cartService.getData();
  }
}
