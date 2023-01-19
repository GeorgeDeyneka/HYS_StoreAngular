import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
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
  public counter: number | string;
  public arrCart: ProductType[];

  constructor(private router: Router, private cartService: CartService) {}

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
    this.arrCart = this.cartService.getData();
    this.getCountOfProds(this.arrCart);

    this.cartService.subj$.subscribe((data) => {
      this.getCountOfProds(data);
    });
  }

  ngOnDestroy(): void {
    this.subj$.unsubscribe();
  }
}
