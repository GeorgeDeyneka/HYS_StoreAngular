import { ProductType } from '../../../models/interfaces/product.interface';
import { BehaviorSubject, first } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  protected productsData: ProductType[] = [];
  public limitCount: number = 8;
  public serverDataFullLength: number;
  public loading$ = new BehaviorSubject<boolean>(true);
  public buttonDis = true;

  constructor(private storeService: StoreService) {}

  loadMore(num: number) {
    if (this.limitCount > this.productsData.length) return;
    this.limitCount += num;
    this.serverData;
  }

  checkDisabled() {
    if (this.limitCount >= this.serverDataFullLength) this.buttonDis = false;
  }

  get serverData() {
    return this.storeService
      .getList<ProductType[]>(`?limit=${this.limitCount}`)
      .pipe(first())
      .subscribe((data) => {
        this.productsData = data;
        if (this.productsData.length) this.loading$.next(false);
        this.checkDisabled();
      });
  }

  get lengthData() {
    return this.storeService
      .getList<ProductType[]>()
      .pipe(first())
      .subscribe((data) => {
        this.serverDataFullLength = data.length;
      });
  }

  ngOnInit(): void {
    this.serverData;
    this.lengthData;
  }
}
