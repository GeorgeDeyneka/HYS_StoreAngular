import { BehaviorSubject, Subscription } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { TableConfigService } from '../shared-admin/services/table-config.service';
import { FilterBarService } from '../shared-admin/services/filter-bar.service';
import { filterConfig } from 'src/app/models/interfaces/default-config.interface';
import { UsersService } from '../shared-admin/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public data$: any[] = [];
  private filterSubj$: Subscription;
  private dataSubj$: Subscription;
  public loading$ = new BehaviorSubject<boolean>(true);
  public pageIndex: number = 0;
  public dataLength: number;

  constructor(
    private usersService: UsersService,
    private tableConfigService: TableConfigService,
    private filterBarService: FilterBarService
  ) {}

  ngOnInit(): void {
    this.dataSubj$ = this.usersService.getList<any[]>().subscribe((data) => {
      if (data.length) {
        this.loading$.next(false);
        this.data$ = this.filterBarService.setData(data, 5);
        this.dataLength = data.length;
      }
    });

    this.filterSubj$ = this.tableConfigService.configuration$.subscribe(
      (elem) => this.changeData(elem)
    );
  }

  changePage(event: any) {
    let arr = this.filterBarService.changePage(event);
    this.data$ = arr[0] as any[];
    this.pageIndex = arr[1] as number;
  }

  changeData(elem: filterConfig) {
    let arr = this.filterBarService.changeData(elem);

    this.data$ = arr[0] as any[];
    this.dataLength = arr[1] as number;
    this.pageIndex = arr[2] as number;
  }

  ngOnDestroy() {
    this.filterSubj$.unsubscribe();
    this.dataSubj$.unsubscribe();
  }
}
