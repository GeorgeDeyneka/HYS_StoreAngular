import { Injectable } from '@angular/core';
import { ProductType } from 'src/app/models/interfaces/product.interface';
import { BaseFilter } from 'src/app/shared/classes/base-filter';

@Injectable({
  providedIn: 'root',
})
export class ProductsFilterService extends BaseFilter<ProductType> {}
