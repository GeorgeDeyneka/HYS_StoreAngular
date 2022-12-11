import { CartService } from './../../services/cart.service';
import { Product } from '../../../models/interfaces/products.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() public productItem: Product;

  constructor(
    private cartService: CartService
  ) {}

  ngOnInit(): void {}

  addToCart() {
    this.cartService.addToCart(this.productItem)
  }
}
