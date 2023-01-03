import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { filterConfig } from 'src/app/models/interfaces/default-config.interface';

const DEFAULT_CONFIGURATION: filterConfig = {
  date: `${new Date().getFullYear()}-${
    new Date().getMonth() + 1
  }-${new Date().getDate()}`,
  price: 0,
  search: '',
  priceSelect: '',
  sort: '',
  sortFrom: ''
};

@Injectable({
  providedIn: 'root',
})
export class TableConfigService {
  public configuration$: BehaviorSubject<filterConfig> = new BehaviorSubject(
    DEFAULT_CONFIGURATION
  );

  constructor() {}

  get DefaultConfig() {
    return this.configuration$.getValue();
  }

  setSearch(search: string) {
    this.configuration$.next({
      ...this.DefaultConfig,
      search,
    });
  }

  setPrice(price: number) {
    this.configuration$.next({
      ...this.DefaultConfig,
      price,
    });
  }

  setDate(date: string) {
    this.configuration$.next({
      ...this.DefaultConfig,
      date,
    });
  }

  setPriceSelect(priceSelect: string) {
    this.configuration$.next({
      ...this.DefaultConfig,
      priceSelect,
    });
  }

  setSort(sort: string) {
    this.configuration$.next({
      ...this.DefaultConfig,
      sort,
    });
  }

  setSortFrom(sortFrom: string) {
    this.configuration$.next({
      ...this.DefaultConfig,
      sortFrom,
    });
  }
}
