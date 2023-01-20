import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ButtonTextEnum } from 'src/app/models/enums/button-text.enum';
import { ProductType } from 'src/app/models/interfaces/product.interface';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit, OnDestroy {
  @Input() public productItem: ProductType;
  public buttonText: string = ButtonTextEnum.add;
  private subj$: Subscription;

  constructor(private cartService: CartService) {}

  checkProduct(data: ProductType[]) {
    if (!data.length) {
      this.buttonText = ButtonTextEnum.add;
    }

    for (let i = 0; i < data.length; i++) {
      if (data[i].id === this.productItem.id && data[i].count) {
        this.buttonText = ButtonTextEnum.inCart;
        return;
      }
      this.buttonText = ButtonTextEnum.add;
    }
  }

  ngOnInit(): void {
    this.subj$ = this.cartService.subj$.subscribe((elem) => {
      this.checkProduct(elem);
    });
  }

  addToCart(): void {
    this.cartService.addToCart(this.productItem);
    this.buttonText = ButtonTextEnum.inCart;
  }

  ngOnDestroy() {
    this.subj$.unsubscribe();
  }
}
