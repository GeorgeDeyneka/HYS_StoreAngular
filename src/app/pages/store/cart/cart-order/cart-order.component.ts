import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductType } from 'src/app/models/interfaces/product.interface';
import { OrdersService } from 'src/app/pages/administration/shared/services/orders.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { CartComponent } from '../cart.component';

export interface LocalStorageOrderForm {
  name: string;
  phone: string;
  message: string;
}

@Component({
  selector: 'app-cart-order',
  templateUrl: './cart-order.component.html',
  styleUrls: ['./cart-order.component.scss'],
})
export class CartOrderComponent implements OnInit {
  @Output() hideClick = new EventEmitter();
  @Input() orderData: ProductType[];
  public serverData: any[];
  public storageForm: any;
  constructor(
    private fb: FormBuilder,
    private ordersService: OrdersService,
    private cartService: CartService,
    private localStorageService: LocalStorageService
  ) {}

  public form: FormGroup;

  ngOnInit(): void {
    this.storageForm = this.localStorageService.getData('orderData');

    this.form = this.fb.group({
      name: [
        this.storageForm.name || '',
        [
          Validators.pattern(/^[a-zA-Z ]{0,20}$/),
          Validators.required,
          Validators.minLength(4),
        ],
      ],
      phone: [
        this.storageForm.phone || '',
        [
          Validators.minLength(10),
          Validators.maxLength(13),
          Validators.required,
          Validators.pattern(/^([+]?[0-9\s-\(\)]{3,13})*$/i),
        ],
      ],
      message: this.storageForm.message || '',
    });
  }

  get nameForm() {
    return this.form.get('name');
  }

  get phoneForm() {
    return this.form.get('phone');
  }

  setOrderInLocal() {
    this.localStorageService.setData('orderData', this.form.getRawValue());
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
        name,
        phone,
        message,
        products: [...this.serverData],
      })
      .subscribe({
        next: (response) => {
          this.serverData = [];
          this.cartService.clearCart();
          this.localStorageService.removeData('orderData');
          this.hideClick.emit(false)
        },
        error: (error) => {},
      });
  }
}
