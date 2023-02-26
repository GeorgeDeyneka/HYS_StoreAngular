import { ProductType } from '../../../models/interfaces/product.interface';
import { ButtonTextEnum } from '../../../models/enums/button-text.enum';
import { CartService } from '../../../shared/services/cart.service';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from '../store.service';
import { BehaviorSubject, first, Subscription } from 'rxjs';
import { BASE_URL } from 'src/app/shared/services/base-http.service';
import Swiper from 'swiper';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  // @ViewChild('swiper') set swiperRef(element: ElementRef<HTMLElement>) {
    // this.swiper = new Swiper(element.nativeElement, {});
  // }

  public prod: ProductType;
  public buttonText: string = ButtonTextEnum.add;
  public subj$: Subscription;
  public loading$ = new BehaviorSubject<boolean>(true);
  public url: string = BASE_URL;
  // public swiper: Swiper;

  constructor(
    private storeService: StoreService,
    private cartService: CartService,
    private actRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.actRouter.snapshot.paramMap.get('id');

    this.storeService
      .getById<ProductType>(id!)
      .pipe(first())
      .subscribe((item) => {
        if (item) {
          this.prod = item;
          this.loading$.next(false);
        } else {
          this.router.navigateByUrl('/**');
        }

        this.subj$ = this.cartService.subj$.subscribe((elem) => {
          this.checkProduct(elem);
        });
      });
  }

  checkProduct(data: ProductType[]) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === this.prod.id) {
        this.prod = data[i];
        this.buttonText = ButtonTextEnum.inCart;
        return;
      }
    }
    this.buttonText = ButtonTextEnum.add;
  }

  addToCart() {
    this.cartService.addToCart(this.prod);
    this.buttonText = ButtonTextEnum.inCart;
  }

  ngOnDestroy() {
    this.subj$.unsubscribe();
  }
}
