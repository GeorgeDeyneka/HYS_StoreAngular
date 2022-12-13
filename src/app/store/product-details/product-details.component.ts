import { CartService } from '../../shared/services/cart.service';
import { DetailsService } from '../../shared/services/details.service';
import { Product } from '../../models/interfaces/products.interface';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  public prod: Product;
  public buttonText: string = 'Add To Cart';

  constructor(
    private detailsService: DetailsService,
    private cartService: CartService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    this.prod = this.detailsService.getData(id);
    this.checkProduct();
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
