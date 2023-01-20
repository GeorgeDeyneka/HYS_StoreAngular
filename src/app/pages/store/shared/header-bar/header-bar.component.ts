import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, fromEvent, Subscription } from 'rxjs';
import { HeaderColor } from 'src/app/models/enums/header-color.enum';
import { ProductType } from 'src/app/models/interfaces/product.interface';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss'],
})
export class HeaderBarComponent implements OnInit, OnDestroy {
  public modalClassName: string = 'unvisible';
  public subj$: Subscription;
  public scrollSubj$: Subscription;
  public counter: number;
  public scrollPosition = 0;

  constructor(private router: Router, private cartService: CartService) {}

  @ViewChild('header') header: ElementRef;

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

  onHover() {
    this.router.url === '/products/cart'
      ? (this.modalClassName = 'unvisible')
      : (this.modalClassName = 'modal');
  }

  onLeave() {
    this.modalClassName = 'unvisible';
  }

  getCountOfProds(data: ProductType[]) {
    return (this.counter = data.reduce((acc, el) => (acc += el.count!), 0));
  }

  ngOnInit(): void {
    this.subj$ = this.cartService.subj$.subscribe((data) => {
      this.getCountOfProds(data);
    });

    this.scrollSubj$ = fromEvent(window, 'scroll')
      .pipe(debounceTime(50))
      .subscribe(() => this.onWindowScroll());
  }

  ngOnDestroy(): void {
    this.scrollSubj$.unsubscribe();
    this.subj$.unsubscribe();
  }
}
