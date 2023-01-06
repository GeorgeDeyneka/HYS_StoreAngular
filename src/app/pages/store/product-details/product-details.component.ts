import { ProductType } from './../../../models/interfaces/http-product.interface';
import { ButtonTextEnum } from '../../../models/enums/button-text.enum';
import { CartService } from '../../../shared/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  public prod: ProductType;
  public buttonText: string = ButtonTextEnum.add;

  constructor(
    private storeService: StoreService,
    private cartService: CartService,
    private actRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.actRouter.snapshot.paramMap.get('id');

    this.storeService.getById<ProductType>(id!).subscribe((item) => {
      if (!item) {
        this.router.navigateByUrl('/**');
      } else {
        this.prod = item;
        this.checkProduct();
      }
    });
  }

  checkProduct() {
    this.cartService.checkProduct(this.prod) > 0
      ? (this.buttonText = ButtonTextEnum.inCart)
      : (this.buttonText = ButtonTextEnum.add);
  }

  addToCart() {
    this.cartService.addToCart(this.prod);
    this.checkProduct();
  }
}
