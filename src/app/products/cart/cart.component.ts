import { CartService } from './../../shared/services/cart.service';
import { Product } from './../../models/interfaces/products.interface';
import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public arrCart: Product[];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.arrCart = this.cartService.arrCart;
  }
}
