import { ProductType } from '../../../models/interfaces/product.interface';
import { ButtonTextEnum } from '../../../models/enums/button-text.enum';
import { CartService } from '../../../shared/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from '../store.service';
import { BehaviorSubject, first } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  public prod: ProductType;
  public buttonText: string = ButtonTextEnum.add;
  public loading$ = new BehaviorSubject<boolean>(true);

  constructor(
    private storeService: StoreService,
    private cartService: CartService,
    private actRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.actRouter.snapshot.paramMap.get('id');

    this.storeService.getById<ProductType>(id!).pipe(first()).subscribe((item) => {
      if (item) {
        this.prod = item;
        this.checkProduct();
        if (this.prod) this.loading$.next(false);
      } else {
        this.router.navigateByUrl('/**');
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
