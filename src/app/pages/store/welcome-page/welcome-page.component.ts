import { ProductType } from './../../../models/interfaces/http-product.interface';
import { first, BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent implements OnInit {
  public slicedData: ProductType[];
  public loading$ = new BehaviorSubject<boolean>(true);

  constructor(private storeService: StoreService) {}

  getCheapestProducts(count: number): ProductType[] {
    this.storeService
      .getList<ProductType[]>()
      .pipe(first())
      .subscribe((data) => {
        this.slicedData = [...data]
          .sort((a, b) => a.price - b.price)
          .slice(0, count);
        if (this.slicedData.length) this.loading$.next(false);
      });

    return this.slicedData;
  }

  ngOnInit(): void {
    this.getCheapestProducts(3);
  }
}
