import { ProductType } from '../../../models/interfaces/product.interface';
import { CartService } from '../../../shared/services/cart.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  public arrCart: ProductType[] = [];
  public totalPrice: number;
  public showOrder: boolean = false;
  public subj$: Subscription;

  constructor(private cartService: CartService) {}

  calcPrice(): number {
    return this.cartService.calculateTotalPrice();
  }

  showTemplate() {
    this.showOrder = true;
  }

  hideTemplate(event: any) {
    this.showOrder = event;
  }

  clearCart(): void {
    this.arrCart = this.cartService.clearCart();
  }

  deleteElem(elem: ProductType) {
    this.cartService.deleteProduct(elem);
    this.totalPrice = this.calcPrice();
  }

  updateData() {
    this.arrCart = this.cartService.getData();
    this.totalPrice = this.calcPrice();
  }

  ngOnInit(): void {
    this.updateData();
    this.subj$ = this.cartService.subj$.subscribe((data) => {
      this.arrCart = data;
    });
  }

  ngOnDestroy() {
    this.subj$.unsubscribe();
  }
}
