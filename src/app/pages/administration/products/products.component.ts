import { FilterBarService } from '../shared-admin/services/filter-bar.service';
import { TableConfigService } from '../shared-admin/services/table-config.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Product } from '../../../models/interfaces/products.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoreService } from 'src/app/pages/store/store.service';
import { filterConfig } from 'src/app/models/interfaces/default-config.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  public data: Product[] = [];
  private filterSubj$: Subscription;
  private dataSubj$: Subscription;
  public loading$ = new BehaviorSubject<boolean>(true);
  public pageIndex: number = 0;
  public dataLength: number;

  constructor(
    private storeService: StoreService,
    private tableConfigService: TableConfigService,
    private filterBarService: FilterBarService
  ) {}

  ngOnInit(): void {
    this.dataSubj$ = this.storeService.data.subscribe((data) => {
      if (data) {
        this.loading$.next(false);
        this.data = this.filterBarService.setData(data, 5);
        this.dataLength = data.length;
      }
    });

    this.filterSubj$ = this.tableConfigService.configuration$.subscribe(
      (elem) => this.changeData(elem)
    );
  }

  changePage(event: any) {
    let obj = this.filterBarService.changePage(event);
    this.data = obj.data;
    this.pageIndex = obj.index;
  }

  changeData(elem: filterConfig) {
    let obj = this.filterBarService.changeData(elem);

    this.data = obj.data;
    this.dataLength = obj.length;
    this.pageIndex = obj.index;
  }

  ngOnDestroy() {
    this.filterSubj$.unsubscribe();
    this.dataSubj$.unsubscribe();
  }
}
