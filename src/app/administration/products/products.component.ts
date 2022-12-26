import { PRODUCTS_STATE } from './../../data/state';
import { Product } from './../../models/interfaces/products.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public data: Product[] = PRODUCTS_STATE;
  public prod: Product

  constructor() { }

  ngOnInit(): void {
  }

}
