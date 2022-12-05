import { PRODUCTS_STATE } from './../data/state';
import { Product } from '../models/interfaces/products.interface';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  protected productsData: Product[];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsData =
      PRODUCTS_STATE || this.productsService.createRandomData(8);
  }
}
