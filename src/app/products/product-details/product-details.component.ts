import { DetailsService } from './../../shared/services/details.service';
import { Product } from './../../models/interfaces/products.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public prod: Product;

  constructor(private detailsService: DetailsService) { }

  ngOnInit(): void {
    this.prod = this.detailsService.getData()
  }

}