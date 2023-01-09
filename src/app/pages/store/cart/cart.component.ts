import { ProductType } from '../../../models/interfaces/product.interface';
import { CartService } from '../../../shared/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public arrCart: ProductType[];
  public totalPrice: number;
  public showOrder: boolean = false;

  constructor(private cartService: CartService) {}

  calcPrice(): number {
    return this.cartService.calculateTotalPrice();
  }

  showTemplate() {
    this.showOrder = true;
  }

  hideTemplate() {
    this.showOrder = false;
  }

  clearCart(): void {
    this.arrCart = this.cartService.clearCart();
    this.hideTemplate()
  }

  deleteElem(elem: ProductType) {
    this.cartService.deleteProduct(elem);
    this.updateData();
  }

  updateData() {
    this.arrCart = this.cartService.getData();
    this.totalPrice = this.calcPrice();
  }

  ngOnInit(): void {
    this.updateData();
  }
}
