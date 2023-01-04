import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { filterConfig } from 'src/app/models/interfaces/default-config.interface';

const DEFAULT_CONFIGURATION: filterConfig = {
  createdAt: '',
  price: 0,
  search: '',
  priceSelect: '',
  dateSelect: '',
  sort: '',
  sortFrom: '',
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

  resetConfig() {
    this.configuration$.next(DEFAULT_CONFIGURATION);
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

  setDate(createdAt: string) {
    this.configuration$.next({
      ...this.DefaultConfig,
      createdAt,
    });
  }

  setPriceSelect(priceSelect: string) {
    this.configuration$.next({
      ...this.DefaultConfig,
      priceSelect,
    });
  }

  setDateSelect(dateSelect: string) {
    this.configuration$.next({
      ...this.DefaultConfig,
      dateSelect,
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
