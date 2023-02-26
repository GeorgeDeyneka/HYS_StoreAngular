import { Injectable } from '@angular/core';
import { Select } from 'src/app/models/enums/select.enum';
import { filterConfig } from 'src/app/models/interfaces/default-config.interface';
import { UserType } from 'src/app/models/interfaces/user.interface';
import { BaseFilter } from 'src/app/shared/classes/base-filter';

@Injectable({
  providedIn: 'root',
})
export class UsersFilterService extends BaseFilter<UserType> {
  override changeData(
    elem: filterConfig,
    param: 'price' | 'createdAt' | 'phone'
  ): any {
    if (elem.createdAt) {
      this.setFilterDate(elem);
    }

    return super.changeData(elem, param);
  }

  setFilterDate(el: filterConfig) {
    this.data = (el.search ? this.data : this.baseData).filter((user: any) =>
      el.dateSelect == Select.more
        ? user.createdAt > el.createdAt
        : user.createdAt < el.createdAt
    );
  }
}
