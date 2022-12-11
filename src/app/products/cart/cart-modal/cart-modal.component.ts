import { Product } from './../../../models/interfaces/products.interface';
import { CartService } from '../../../shared/services/cart.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss'],
})
export class CartModalComponent implements OnInit, OnChanges {
  public arrCart: Product[];

  @Input() className: string;

  constructor(private cartService: CartService) {}
  ngOnInit(): void {}

  ngOnChanges(): void {
    this.arrCart = this.cartService.arrCart;
  }
}
