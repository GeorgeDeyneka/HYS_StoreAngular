import { CartService } from './../../services/cart.service';
import { Product } from '../../../models/interfaces/products.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  @Input() public productItem: Product;
  public buttonText: string = this.checkProduct() || 'Add To Cart';

  constructor(private cartService: CartService) {}

  checkProduct(): string | void {
    const data = this.cartService.arrCart;
    if (data.find(() => this.productItem)) {
      return (this.buttonText = 'In Cart');
    }
  }

  addToCart(): void {
    this.checkProduct();
    this.cartService.addToCart(this.productItem);
  }
}
