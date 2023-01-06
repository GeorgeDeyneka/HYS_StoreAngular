import { Component, Input, OnChanges } from '@angular/core';
import { ProductType } from 'src/app/models/interfaces/http-product.interface';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss'],
})
export class CartModalComponent implements OnChanges {
  public arrCart: ProductType[] = [];
  public totalPrice: number;

  @Input() className: string;

  constructor(private cartService: CartService) {}

  ngOnChanges(): void {
    this.updateData();
  }

  deleteElem(elem: ProductType): void {
    this.cartService.deleteProduct(elem);
    this.arrCart = this.cartService.getData();
  }

  updateData(): void {
    this.arrCart = this.cartService.getData();
    this.totalPrice = this.calcPrice();
  }

  calcPrice(): number {
    return this.cartService.calculateTotalPrice();
  }
}
