import { Product } from '../../../models/interfaces/products.interface';
import { CartService } from '../../../shared/services/cart.service';
import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit{
  public arrCart: Product[];
  public totalPrice: number;

  constructor(private cartService: CartService) {}

  calcPrice(): number {
    return this.cartService.calculateTotalPrice();
  }

  clearCart(): void {
    this.arrCart = this.cartService.clearCart();
  }

  deleteElem(elem: Product) {
    this.cartService.deleteProduct(elem);
    this.updateData();
  }

  updateData() {
    this.arrCart = this.cartService.getData();
    this.totalPrice = this.calcPrice();
  }

  ngOnChanges() {}

  ngOnInit(): void {
    this.updateData();
  }
}
