import { Product } from '../../models/interfaces/products.interface';
import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  protected productsData: Product[];

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.productsData = this.storeService.getData();
  }
}
