import { Product } from './../../models/interfaces/products.interface';
import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent implements OnInit {
  public data: Product[] = this.storeService.data;
  public slicedData: Product[] = this.getCheapestProducts(3);

  constructor(private storeService: StoreService) {}

  getCheapestProducts(count: number): Product[] {
    return this.data
      .slice(0)
      .sort((a, b) => a.price - b.price)
      .slice(0, count);
  }

  ngOnInit(): void {}
}
