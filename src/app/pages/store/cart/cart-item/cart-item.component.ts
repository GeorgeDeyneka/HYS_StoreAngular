import { ProductType } from '../../../../models/interfaces/product.interface';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() productItem: ProductType;
  @Output() countClick = new EventEmitter();
  @Output() clickHandler = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
