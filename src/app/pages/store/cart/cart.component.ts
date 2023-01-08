import { ProductType } from './../../../models/interfaces/http-product.interface';
import { CartService } from '../../../shared/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public arrCart: ProductType[];
  public totalPrice: number;
  public form: FormGroup;
  public showOrder: boolean = false;

  constructor(private cartService: CartService, private fb: FormBuilder) {}

  calcPrice(): number {
    return this.cartService.calculateTotalPrice();
  }

  showTemplate() {
    this.showOrder = true;
    this.form = this.fb.group({
      name: '',
      phone: '',
      message: '',
    });
  }

  hideTemplate() {
    this.showOrder = false;
  }

  clearCart(): void {
    this.arrCart = this.cartService.clearCart();
  }

  deleteElem(elem: ProductType) {
    this.cartService.deleteProduct(elem);
    this.updateData();
  }

  updateData() {
    this.arrCart = this.cartService.getData();
    this.totalPrice = this.calcPrice();
  }

  ngOnChanges() {}

  ngOnInit(): void {
    this.updateData();
  }
}
