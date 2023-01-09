import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductType } from 'src/app/models/interfaces/http-product.interface';
import { OrdersService } from 'src/app/pages/administration/shared/services/orders.service';
import { CartComponent } from '../cart.component';

@Component({
  selector: 'app-cart-order',
  templateUrl: './cart-order.component.html',
  styleUrls: ['./cart-order.component.scss'],
})
export class CartOrderComponent implements OnInit {
  @Output() hideClick = new EventEmitter();
  @Input() orderData: ProductType[];
  public serverData: any[];
  constructor(
    private fb: FormBuilder,
    private ordersService: OrdersService,
    private cartComponent: CartComponent
  ) {}

  public form: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.pattern(/^[a-zA-Z]{0,20}$/)],
      phone: ['', Validators.pattern(/^\+\d{3}\d{3}\d{3}\d{3}$/)],
      message: '',
    });
  }

  get nameForm() {
    return this.form.get('name');
  }

  get phoneForm() {
    return this.form.get('phone');
  }

  createOrder() {
    if (this.nameForm?.invalid || this.phoneForm?.invalid) return;

    let { name, phone, message } = this.form.getRawValue();
    this.serverData = [...this.orderData];

    this.serverData.forEach((el: any) => {
      el['quantity'] = el.count;
    });

    this.ordersService
      .create({
        name: name,
        phone: phone,
        message: message,
        products: [...this.serverData],
      })
      .subscribe({
        next: (response) => {},
        error: (error) => {},
      });
    
      this.serverData = [];
      this.cartComponent.clearCart()
      // ? How to clear cart from service? (event emitter)
  }
}
