import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { DataName } from 'src/app/models/enums/data-name.enum';
import { filterConfig } from 'src/app/models/interfaces/default-config.interface';
import { OrderType } from 'src/app/models/interfaces/order.interface';
import { OrdersFilterService } from '../shared/services/orders-filter.service';
import { OrdersService } from '../shared/services/orders.service';
import { TableConfigService } from '../shared/services/table-config.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  private dataSubj$: Subscription;
  public data: OrderType[] = [];
  public dataName = DataName.orders;
  private filterSubj$: Subscription;
  public loading$ = new BehaviorSubject<boolean>(true);
  public pageIndex: number = 0;
  public dataLength: number;

  constructor(
    private ordersService: OrdersService,
    private tableConfigService: TableConfigService,
    private ordersFilterService: OrdersFilterService
  ) {}

  ngOnInit(): void {
    this.dataSubj$ = this.ordersService
      .getList<OrderType[]>()
      .subscribe((data) => {
        if (data.length) {
          this.loading$.next(false);
          this.data = this.ordersFilterService.setData(data, 5);
          this.dataLength = data.length;
        }
      });

    this.filterSubj$ = this.tableConfigService.configuration$.subscribe(
      (elem) => this.changeData(elem)
    );
  }

  changePage(event: any) {
    let obj = this.ordersFilterService.changePage(event);
    this.data = obj.data;
    this.pageIndex = obj.index;
  }

  changeData(elem: filterConfig) {
    let obj = this.ordersFilterService.changeData(elem, 'phone');

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
