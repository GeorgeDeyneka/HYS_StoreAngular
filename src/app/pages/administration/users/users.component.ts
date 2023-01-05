import { BehaviorSubject, Subscription } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { TableConfigService } from '../shared/services/table-config.service';
import { FilterBarService } from '../shared/services/filter-bar.service';
import { filterConfig } from 'src/app/models/interfaces/default-config.interface';
import { UsersService } from '../shared/services/users.service';
import { HttpUser } from 'src/app/models/interfaces/http-user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public data: HttpUser[] = [];
  private filterSubj$: Subscription;
  private dataSubj$: Subscription;
  public loading$ = new BehaviorSubject<boolean>(true);
  public pageIndex: number = 0;
  public dataLength: number;

  constructor(
    private usersService: UsersService,
    private tableConfigService: TableConfigService,
    private filterBarService: FilterBarService<HttpUser>
  ) {}

  ngOnInit(): void {
    this.dataSubj$ = this.usersService.getList<HttpUser[]>().subscribe((data) => {
      if (data.length) {
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
    let obj = this.filterBarService.changeData(elem, 'createdAt');

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
