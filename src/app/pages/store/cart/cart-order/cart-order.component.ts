import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ProductType } from 'src/app/models/interfaces/product.interface';
import { OrdersService } from 'src/app/pages/administration/shared/services/orders.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { OrderModalComponent } from '../../shared/order-modal/order-modal.component';
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
export class CartOrderComponent implements OnInit, OnDestroy {
  @Output() hideClick = new EventEmitter();
  @Input() orderData: ProductType[];
  public serverData: any[];
  public storageForm: any;
  public showLabel: boolean = false;
  public formSub$: Subscription;

  constructor(
    private fb: FormBuilder,
    private ordersService: OrdersService,
    private cartService: CartService,
    private localStorageService: LocalStorageService,
    public matDialog: MatDialog
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
          Validators.pattern(/^([+]?[0-9\s-\(\)]{0,13})*$/i),
        ],
      ],
      message: this.storageForm.message || '',
    });

    this.formSub$ = this.form.valueChanges.subscribe((value) => {
      if (value.name || value.phone) {
        this.showLabel = false;
      }
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

  openDialog() {
    const config: Object = {
      height: '300px',
      width: '400px',
    };

    const dialogRef = this.matDialog.open(OrderModalComponent, config);
  }

  createOrder() {
    if (this.nameForm?.invalid || this.phoneForm?.invalid) {
      this.showLabel = true;
      return;
    }

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
          this.hideClick.emit(false);
          this.openDialog();
        },
        error: (error) => {},
      });
  }

  ngOnDestroy(): void {
    this.formSub$.unsubscribe();
  }
}
