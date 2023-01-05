
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ButtonTextEnum } from 'src/app/models/enums/button-text.enum';
import { HttpProduct } from 'src/app/models/interfaces/http-product.interface';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnChanges, OnInit {
  @Input() public productItem: HttpProduct;
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