import { filterConfig } from 'src/app/models/interfaces/default-config.interface';
import { Product } from './../../../models/interfaces/products.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterBarService {
  public data$: Product[] = [];
  public copyArr: Product[] = [];
  private baseData: Product[] = [];
  public pageIndex: number = 0;
  public dataLength: number;
  private num: number;

  constructor() {}

  setData(data: Product[], num: number) {
    this.data$ = data;
    this.baseData = [...data];
    this.copyArr = [...data];
    this.dataLength = data.length;
    this.num = num;
    this.firstPage();

    return this.data$;
  }

  firstPage() {
    this.data$ = this.copyArr.slice(0, this.num);
  }

  changeData(elem: filterConfig) {
    if (elem.search) {
      this.data$ = this.baseData.filter(
        (prod) => prod.name.toLowerCase().search(elem.search.toLowerCase()) >= 0
      );
    }

    if (!elem.search && !elem.price) {
      this.data$ = this.baseData;
    }

    if (elem.price) {
      this.data$ = (elem.search ? this.data$ : this.baseData).filter((prod) =>
        elem.priceSelect == 'more'
          ? prod.price > elem.price
          : prod.price < elem.price
      );
    }

    if (elem.sort && elem.sortFrom) {
      this.data$ = [
        ...(elem.search || elem.price ? this.data$ : this.baseData),
      ];

      this.data$.sort(this.byField(elem.sort, elem.sortFrom));
    }

    this.pageIndex = 0;
    this.dataLength = this.data$.length;
    this.copyArr = [...this.data$];
    this.firstPage();

    return [this.data$, this.dataLength, this.pageIndex]
  }

  changePage(event: any) {
    let index = event.pageIndex;
    let lastIndex = event.previousPageIndex;
    if (index > lastIndex) {
      this.data$ = this.copyArr.slice((lastIndex + 1) * 5, (index + 1) * 5);
      this.pageIndex++;
    }
    if (index < lastIndex) {
      this.data$ = this.copyArr.slice(index * 5, lastIndex * 5);
      this.pageIndex--;
    }

    return [this.data$, this.pageIndex];

  }

  byField(field: string, from: string) {
    return (a: any, b: any) =>
      from == 'more'
        ? a[field] < b[field]
          ? 1
          : -1
        : a[field] > b[field]
        ? 1
        : -1;
  }
}
