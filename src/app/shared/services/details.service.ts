import { Product } from './../../models/interfaces/products.interface';
import { Injectable } from '@angular/core';
import { StoreService } from 'src/app/store/store.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  public product: Product;

  constructor(
    private storeService: StoreService,
    private router: Router
  ) {}

  getData(id: any) {
    this.checkData(id);
    return this.product;
  }

  checkData(id: any) {
    let date: Product[] = this.storeService.getData();
    for (let i = 0; i < date.length; i++) {
      if (date[i].id === +id) {
        this.product = date[i];
      }
    }
    if (!this.product) {
      this.router.navigateByUrl('404-page');
    }
  }
}
