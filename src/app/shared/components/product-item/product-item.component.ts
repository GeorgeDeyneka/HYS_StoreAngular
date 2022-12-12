import { CartService } from './../../services/cart.service';
import { Product } from '../../../models/interfaces/products.interface';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnChanges, OnInit {
  @Input() public productItem: Product;
  public buttonText: string = 'Add To Cart';

  constructor(private cartService: CartService) {}

  checkProduct() {
    this.cartService.checkProduct(this.productItem) > 0
      ? (this.buttonText = 'In Cart')
      : (this.buttonText = 'Add To Cart');
  }

  ngOnInit(): void {
    this.checkProduct();
  }

  ngOnChanges(): void {}

  addToCart(): void {
    this.cartService.addToCart(this.productItem);
    this.checkProduct();
  }
}
