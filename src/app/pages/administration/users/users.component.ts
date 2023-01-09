import { UsersFilterService } from './../shared/services/users-filter.service';
import { BehaviorSubject, Subscription } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { TableConfigService } from '../shared/services/table-config.service';
import { filterConfig } from 'src/app/models/interfaces/default-config.interface';
import { UsersService } from '../shared/services/users.service';
import { UserType } from 'src/app/models/interfaces/user.interface';
import { DataName } from 'src/app/models/enums/data-name.enum';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public dataName = DataName.users
  public data: UserType[] = [];
  private filterSubj$: Subscription;
  private dataSubj$: Subscription;
  public loading$ = new BehaviorSubject<boolean>(true);
  public pageIndex: number = 0;
  public dataLength: number;

  constructor(
    private usersService: UsersService,
    private tableConfigService: TableConfigService,
    private usersFilterService: UsersFilterService,
  ) {}

  ngOnInit(): void {
    this.dataSubj$ = this.usersService.getList<UserType[]>().subscribe((data) => {
      if (data.length) {
        this.loading$.next(false);
        this.data = this.usersFilterService.setData(data, 5);
        this.dataLength = data.length;
      }
    });

    this.filterSubj$ = this.tableConfigService.configuration$.subscribe(
      (elem) => this.changeData(elem)
    );
  }

  changePage(event: any) {
    let obj = this.usersFilterService.changePage(event);
    this.data = obj.data;
    this.pageIndex = obj.index;
  }

  changeData(elem: filterConfig) {
    let obj = this.usersFilterService.changeData(elem, 'createdAt');

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
