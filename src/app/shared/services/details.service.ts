import { Product } from './../../models/interfaces/products.interface';
import { Injectable } from '@angular/core';
import { ProductsService } from 'src/app/products/products.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  public product: Product;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  getData(id: any) {
    this.checkData(id);
    return this.product
  }

  checkData(id: any) {
    let date: Product[] = this.productsService.getData();
    for (let i = 0; i < date.length; i++) {
      if (date[i].id === +id) {
        this.product = date[i];
      }
    }
    if (!this.product) {
      this.router.navigateByUrl('products/404-page');
    }
  }
}
