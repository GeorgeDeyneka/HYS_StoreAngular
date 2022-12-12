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
    const data = this.cartService.arrCart;
    if (data.filter((el) => el.id === this.productItem.id).length) {
      this.buttonText = 'In Cart';
    }
    return this.buttonText = 'Add'
  }

  ngOnInit(): void {
    this.checkProduct();
  }

  ngOnChanges(): void {
  }

  addToCart(): void {
    this.cartService.addToCart(this.productItem);
    this.checkProduct();
  }
}
