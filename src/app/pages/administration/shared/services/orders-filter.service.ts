import { Injectable } from '@angular/core';
import { OrderType } from 'src/app/models/interfaces/order.interface';
import { BaseFilter } from 'src/app/shared/classes/base-filter';

@Injectable({
  providedIn: 'root',
})
export class OrdersFilterService extends BaseFilter<OrderType> {}
