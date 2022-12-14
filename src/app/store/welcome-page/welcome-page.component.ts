import { Product } from './../../models/interfaces/products.interface';
import { PRODUCTS_STATE } from './../../data/state';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent implements OnInit {
  public data: Product[] = PRODUCTS_STATE;
  public slicedData: Product[] = this.getCheapestProducts(3);

  constructor() {}

  getCheapestProducts(count: number): Product[] {
    return this.data
      .slice(0)
      .sort((a, b) => a.price - b.price)
      .slice(0, count);
  }

  ngOnInit(): void {}
}
