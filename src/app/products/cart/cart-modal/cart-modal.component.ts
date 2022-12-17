import { Product } from './../../../models/interfaces/products.interface';
import { CartService } from '../../../shared/services/cart.service';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss'],
})
export class CartModalComponent implements OnChanges {
  public arrCart: Product[] = [];
  public totalPrice: number;

  @Input() className: string;

  constructor(private cartService: CartService) {}

  ngOnChanges(): void {
    this.updateData();
  }

  deleteElem(elem: Product) {
    this.cartService.deleteProduct(elem);
    this.arrCart = this.cartService.getData();
  }

  updateData() {
    this.arrCart = this.cartService.getData();
    this.totalPrice = this.calcPrice();
  }

  calcPrice(): number {
    return this.cartService.calculateTotalPrice();
  }
}
