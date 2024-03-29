import { Injectable } from '@angular/core';
import { DataFields } from 'src/app/models/enums/data-fields.enum';
import { Select } from 'src/app/models/enums/select.enum';
import { filterConfig } from 'src/app/models/interfaces/default-config.interface';
import { ParamFilterKeys } from 'src/app/models/types/param-filter-keys.type';
import { ProductType } from 'src/app/models/interfaces/product.interface';
import { BaseFilter } from 'src/app/shared/classes/base-filter';

@Injectable({
  providedIn: 'root',
})
export class ProductsFilterService extends BaseFilter<ProductType> {
  override changeData(elem: filterConfig, param: ParamFilterKeys): any {
    if (elem.price) {
      this.setFilterPrice(elem);
    }

    return super.changeData(elem, param);
  }

  setFilterPrice(el: filterConfig) {
    this.data = (el.search ? this.data : this.baseData).filter((prod: any) =>
      el.priceSelect == Select.more
        ? prod.price > el.price
        : prod.price < el.price
    );
  }
}
