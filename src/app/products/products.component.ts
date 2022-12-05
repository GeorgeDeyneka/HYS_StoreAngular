import { state } from '../data/state';
import { Product } from '../models/interfaces/products.interface';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  @Input() protected productsData: Product[];
  
  constructor(private productsService: ProductsService) {
  }
  
  ngOnInit(): void {
    this.productsData = state || this.productsService.createRandomData(8);
  }
}
