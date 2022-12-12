import { CartComponent } from './../cart.component';
import { Product } from './../../../models/interfaces/products.interface';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() productItem: [Product, number];
  // @Output()

  constructor(
    private cartComponent: CartComponent
  ) {}

  updateData() {
    this.cartComponent.updateData();
  }

  ngOnInit(): void {}
}
