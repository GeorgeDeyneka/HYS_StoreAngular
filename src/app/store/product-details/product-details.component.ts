import { CartService } from '../../shared/services/cart.service';
import { DetailsService } from '../../shared/services/details.service';
import { Product } from '../../models/interfaces/products.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  public prod: Product;
  public buttonText: string = 'Add To Cart';
  public data: Product[] = [];

  constructor(
    private storeService: StoreService,
    private detailsService: DetailsService,
    private cartService: CartService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    this.storeService.data.subscribe((items) => {
      this.data = items;
      if (id) {
        this.prod = this.detailsService.getData(id, this.data);
        this.checkProduct();
      }
    });
  }

  checkProduct() {
    this.cartService.checkProduct(this.prod) > 0
      ? (this.buttonText = 'In Cart')
      : (this.buttonText = 'Add To Cart');
  }

  addToCart() {
    this.cartService.addToCart(this.prod);
    this.checkProduct();
  }
}
