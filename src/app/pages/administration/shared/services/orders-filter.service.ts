import { Injectable } from '@angular/core';
import { Select } from 'src/app/models/enums/select.enum';
import { filterConfig } from 'src/app/models/interfaces/default-config.interface';
import { OrderType } from 'src/app/models/interfaces/order.interface';
import { BaseFilter } from 'src/app/shared/classes/base-filter';

@Injectable({
  providedIn: 'root',
})
export class OrdersFilterService extends BaseFilter<OrderType> {
  override changeData(
    elem: filterConfig,
    param: 'price' | 'createdAt' | 'phone'
  ): any {
    if (elem.quantity) {
      this.setFilterQuantity(elem);
    }

    return super.changeData(elem, param);
  }

  setFilterQuantity(el: filterConfig) {
    this.data = (el.search ? this.data : this.baseData).filter((order: any) => {
      const myKey = 'countOfAllProd';
      order[myKey as keyof OrderType] = order.products.reduce(
        (acc: number, item: any) => (acc += item.quantity),
        0
      );

      return el.quantitySelect == Select.more
        ? order.countOfAllProd > el.quantity
        : order.countOfAllProd < el.quantity;
    });
  }
}
