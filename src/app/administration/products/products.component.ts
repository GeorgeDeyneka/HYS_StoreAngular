import { TableConfigurationService } from '../shared-admin/services/table-configuration.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Product } from './../../models/interfaces/products.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoreService } from 'src/app/store/store.service';
import { filterConfig } from 'src/app/models/interfaces/default-config.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  public data: Product[] = [];
  private baseData: Product[] = [];
  private filterSubj$: Subscription;
  private dataSubj$: Subscription;
  public loading$ = new BehaviorSubject<boolean>(true);

  constructor(
    private storeService: StoreService,
    private tableConfigService: TableConfigurationService
  ) {}

  ngOnInit(): void {
    this.dataSubj$ = this.storeService.data.subscribe((data) => {
      this.data = [...data];
      this.baseData = [...data];
      if (this.data.length) this.loading$.next(false);
    });

    this.filterSubj$ = this.tableConfigService.configuration$.subscribe(
      (elem) => this.changeData(elem)
    );
  }

  changeData(elem: filterConfig) {
    if (elem.search) {
      this.data = this.baseData.filter(
        (prod) => prod.name.toLowerCase().search(elem.search.toLowerCase()) >= 0
      );
    }

    if (!elem.search && !elem.price) {
      this.data = this.baseData;
    }

    if (elem.price) {
      this.data = (elem.search ? this.data : this.baseData).filter((prod) =>
        elem.select == 'More than'
          ? prod.price > elem.price
          : prod.price < elem.price
      );
    }
  }

  ngOnDestroy() {
    this.filterSubj$.unsubscribe();
    this.dataSubj$.unsubscribe();
  }
}
