import { HttpProduct } from './../../../../models/interfaces/http-product.interface';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() productItem: HttpProduct;
  @Output() countClick = new EventEmitter();
  @Output() clickHandler = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
