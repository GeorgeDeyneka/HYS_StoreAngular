import { Product } from './../../../models/interfaces/products.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() productItem: [Product, number];

  constructor() { }

  ngOnInit(): void {
  }

}
