import { PRODUCTS_STATE } from './../../data/state';
import { Product } from './../../models/interfaces/products.interface';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  protected productsData: Product[];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsData = this.productsService.getData();
  }
}
