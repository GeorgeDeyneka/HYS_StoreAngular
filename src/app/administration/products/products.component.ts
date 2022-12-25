import { TableConfigurationService } from '../shared-admin/services/table-configuration.service';
import { BehaviorSubject, first } from 'rxjs';
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
  public sortedData: Product[] = [];
  public loading$ = new BehaviorSubject<boolean>(true);
  filterSubj$: any;
  dataSubj$: any;

  constructor(
    private storeService: StoreService,
    private tableConfigurationService: TableConfigurationService
  ) { }

  ngOnInit(): void {
    this.dataSubj$ = this.storeService.data.pipe(first()).subscribe((data) => {
      this.data = data.slice(0);
      this.sortedData = data.slice(0);
      if (this.data.length) this.loading$.next(false);
    });

    this.filterSubj$ = this.tableConfigurationService.configuration$.subscribe((elem) =>
      this.changeData(elem))
  }

  // Rewrite that!
  
  changeData(elem: filterConfig) {
    if (elem.search) {
      this.data = this.sortedData.filter(
        prod => prod.name.search(elem.search) >= 0
      )
    }
    if (!elem.search && elem.price) {
      this.data = this.sortedData
    }
    if (elem.price) {
      if (elem.select == 'More than') {
        this.data = this.data.filter(
          prod => prod.price > elem.price
        );
      }
      if (elem.select == 'Less than') {
        this.data = this.data.filter(
          prod => prod.price > elem.price
        );
      }
    }
  }

  ngOnDestroy() {
    this.filterSubj$.unsubscribe();
    this.dataSubj$.unsubscribe();
  }
}
