import { ButtonTextEnum } from '../../../../../models/enums/button-text.enum';
import { CartService } from '../../../../../shared/services/cart.service';
import { Product } from '../../../../../models/interfaces/products.interface';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnChanges, OnInit {
  @Input() public productItem: Product;
  public buttonText: string = ButtonTextEnum.add;

  constructor(private cartService: CartService) {}

  checkProduct() {
    this.cartService.checkProduct(this.productItem) > 0
      ? (this.buttonText = ButtonTextEnum.inCart)
      : (this.buttonText = ButtonTextEnum.add);
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
