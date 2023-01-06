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
  public loading$ = new BehaviorSubject<boolean>(true);

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.storeService
      .getList<ProductType[]>()
      .pipe(first())
      .subscribe((data) => {
        this.productsData = data;
        if (this.productsData.length) this.loading$.next(false);
      });
  }
}
