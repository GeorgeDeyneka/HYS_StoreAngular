import { BehaviorSubject, first } from 'rxjs';
import { Product } from '../../../models/interfaces/products.interface';
import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  protected productsData: Product[];
  public loading$ = new BehaviorSubject<boolean>(true);

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.storeService.data.pipe(first()).subscribe((data) => {
      this.productsData = data;
      if (this.productsData.length) this.loading$.next(false);
    });
  }
}
