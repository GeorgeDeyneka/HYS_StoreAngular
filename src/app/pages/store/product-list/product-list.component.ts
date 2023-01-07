import { ProductType } from './../../../models/interfaces/http-product.interface';
import { BehaviorSubject, first } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  protected productsData: ProductType[];
  public limitCount: number = 8;
  public loading$ = new BehaviorSubject<boolean>(true);

  constructor(private storeService: StoreService) {}

  loadMore(num: number) {
    if (num > this.productsData.length) return;
    this.limitCount += num;
    this.serverData;
  }

  get serverData() {
    return this.storeService
      .getList<ProductType[]>(`?limit=${this.limitCount}`)
      .pipe(first())
      .subscribe((data) => {
        this.productsData = data;
        if (this.productsData.length) this.loading$.next(false);
      });
  }

  ngOnInit(): void {
    this.serverData;
  }
}
