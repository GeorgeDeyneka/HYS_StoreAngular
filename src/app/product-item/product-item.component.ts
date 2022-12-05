import { Product } from './../models/interfaces/products.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() public productItem: Product;
  
  constructor() { }
  ngOnInit(): void {
  }

}
