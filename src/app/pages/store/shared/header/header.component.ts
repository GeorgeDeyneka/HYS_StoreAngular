import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { debounceTime, fromEvent, Subscription } from 'rxjs';
import { HeaderColor } from 'src/app/models/enums/header-color.enum';
import { ProductType } from 'src/app/models/interfaces/product.interface';
import { RouteItem } from 'src/app/models/interfaces/route-item.interface';
import { CartService } from 'src/app/shared/services/cart.service';

const NAV_DATA: RouteItem[] = [
  { route: '/', page: 'Store', iconPath: 'icon-bag' },
  { route: '/products', page: 'Products', iconPath: 'icon-laptop' },
  { route: '/products/cart', page: 'Cart', iconPath: 'icon-cart' },
];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public navData: RouteItem[] = NAV_DATA;
  public countSubj$: Subscription;
  public scrollSubj$: Subscription;
  public resizeSubscription$: Subscription;
  public windowWidth: number = window.innerWidth;
  public counter: number;
  public scrollPosition = 0;

  constructor(private cartService: CartService) {}

  @ViewChild('header') header: ElementRef;

  ngOnInit(): void {
    this.initSubscriptions();
  }

  onWindowScroll() {
    this.scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    const opacityHeader = this.header.nativeElement;

    this.scrollPosition > 35
      ? (opacityHeader.style.backgroundColor = HeaderColor.opacity)
      : (opacityHeader.style.backgroundColor = HeaderColor.basic);
  }

  onWindowResize() {
    this.windowWidth = window.innerWidth;
    console.log(this.windowWidth);
  }

  getCountOfProds(data: ProductType[]) {
    return (this.counter = data.reduce((acc, el) => (acc += el.count!), 0));
  }

  initSubscriptions() {
    this.resizeSubscription$ = fromEvent(window, 'resize')
      .pipe(debounceTime(200))
      .subscribe(() => {
        this.onWindowResize();
      });

    this.countSubj$ = this.cartService.subj$.subscribe((data) => {
      this.getCountOfProds(data);
    });

    this.scrollSubj$ = fromEvent(window, 'scroll')
      .pipe(debounceTime(50))
      .subscribe(() => this.onWindowScroll());
  }

  ngOnDestroy(): void {
    this.scrollSubj$.unsubscribe();
    this.countSubj$.unsubscribe();
  }
}
