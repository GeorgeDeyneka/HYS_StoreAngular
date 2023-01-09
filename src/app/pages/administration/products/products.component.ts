import { TableConfigService } from '../shared/services/table-config.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoreService } from 'src/app/pages/store/store.service';
import { filterConfig } from 'src/app/models/interfaces/default-config.interface';
import { ProductType } from 'src/app/models/interfaces/product.interface';
import { ProductsFilterService } from '../shared/services/products-filter.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  public data: ProductType[] = [];
  private filterSubj$: Subscription;
  private dataSubj$: Subscription;
  public loading$ = new BehaviorSubject<boolean>(true);
  public pageIndex: number = 0;
  public dataLength: number;

  constructor(
    private storeService: StoreService,
    private tableConfigService: TableConfigService,
    private productsFilterService: ProductsFilterService
  ) {}

  ngOnInit(): void {
    this.dataSubj$ = this.storeService
      .getList<ProductType[]>()
      .subscribe((data) => {
        if (data.length) {
          this.loading$.next(false);
          this.data = this.productsFilterService.setData(data, 5);
          this.dataLength = data.length;
        }
      });

    this.filterSubj$ = this.tableConfigService.configuration$.subscribe(
      (elem) => this.changeData(elem)
    );
  }

  changePage(event: any) {
    let obj = this.productsFilterService.changePage(event);
    this.data = obj.data;
    this.pageIndex = obj.index;
  }

  changeData(elem: filterConfig) {
    let obj = this.productsFilterService.changeData(elem, 'price');

    this.data = obj.data;
    this.dataLength = obj.length;
    this.pageIndex = obj.index;
  }

  ngOnDestroy() {
    this.filterSubj$.unsubscribe();
    this.dataSubj$.unsubscribe();
    this.tableConfigService.resetConfig();
  }
}
