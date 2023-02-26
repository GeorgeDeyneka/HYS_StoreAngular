import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ButtonTextEnum } from 'src/app/models/enums/button-text.enum';
import { ProductType } from 'src/app/models/interfaces/product.interface';
import { BASE_URL } from 'src/app/shared/services/base-http.service';
import { CartService } from 'src/app/shared/services/cart.service';
import Swiper, { Pagination } from 'swiper';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('swiper') swiperRef: ElementRef<HTMLElement>;
  @Input() public productItem: ProductType;
  public buttonText: string = ButtonTextEnum.add;
  private subj$: Subscription;
  public url: string = BASE_URL;
  public swiper: Swiper;

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

  ngAfterViewInit(): void {
    this.swiper = new Swiper(this.swiperRef.nativeElement, {
      modules: [Pagination],
      slidesPerView: 1,
      loop: true,
      speed: 500,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
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
