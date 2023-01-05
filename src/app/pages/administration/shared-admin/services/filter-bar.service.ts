import { filterConfig } from 'src/app/models/interfaces/default-config.interface';
import { Product } from '../../../../models/interfaces/products.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterBarService {
  public data: Product[] = [];
  public copyArr: Product[] = [];
  private baseData: Product[] = [];
  public pageIndex: number = 0;
  public dataLength: number;
  private num: number;

  constructor() {}

  setData(data: Product[], num: number) {
    this.data = data;
    this.baseData = [...data];
    this.copyArr = [...data];
    this.dataLength = data.length;
    this.num = num;
    this.sliceForFirstPage();

    return this.data;
  }

  changeData(elem: filterConfig) {
    if (elem.search) {
      this.setSearch(elem);
    }

    if (!elem.search && !elem.price) {
      this.resetFilterData();
    }

    if (elem.price) {
      this.setFilterPrice(elem);
    }

    if (elem.sort && elem.sortFrom) {
      this.setSortData(elem);
    }

    this.pageIndex = 0;
    this.dataLength = this.data.length;
    this.copyArr = [...this.data];
    this.sliceForFirstPage();

    return { data: this.data, length: this.dataLength, index: this.pageIndex };
  }

  setFilterPrice(el: filterConfig) {
    this.data = (el.search ? this.data : this.baseData).filter((prod) =>
      el.priceSelect == 'more' ? prod.price > el.price : prod.price < el.price
    );
  }

  setSearch(el: filterConfig) {
    this.data = this.baseData.filter(
      (prod) => prod.name.toLowerCase().search(el.search.toLowerCase()) >= 0
    );
  }

  setSortData(el: filterConfig) {
    this.data = [...(el.search || el.price ? this.data : this.baseData)];
    this.data.sort(this.byField(el.sort, el.sortFrom));
  }

  resetFilterData() {
    this.data = this.baseData;
  }

  changePage(event: any) {
    let index = event.pageIndex;
    let lastIndex = event.previousPageIndex;
    if (index > lastIndex) {
      this.data = this.copyArr.slice((lastIndex + 1) * 5, (index + 1) * 5);
      this.pageIndex++;
    }
    if (index < lastIndex) {
      this.data = this.copyArr.slice(index * 5, lastIndex * 5);
      this.pageIndex--;
    }

    return { data: this.data, index: this.pageIndex };
  }

  sliceForFirstPage() {
    this.data = this.copyArr.slice(0, this.num);
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
