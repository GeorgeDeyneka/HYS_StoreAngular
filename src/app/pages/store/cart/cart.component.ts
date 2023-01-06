import { ProductType } from './../../../models/interfaces/http-product.interface';
import { CartService } from '../../../shared/services/cart.service';
import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit{
  public arrCart: ProductType[];
  public totalPrice: number;

  constructor(private cartService: CartService) {}

  calcPrice(): number {
    return this.cartService.calculateTotalPrice();
  }

  clearCart(): void {
    this.arrCart = this.cartService.clearCart();
  }

  deleteElem(elem: ProductType) {
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
