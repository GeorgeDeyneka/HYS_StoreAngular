import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductType } from 'src/app/models/interfaces/http-product.interface';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart-order',
  templateUrl: './cart-order.component.html',
  styleUrls: ['./cart-order.component.scss'],
})
export class CartOrderComponent implements OnInit {
  @Output() hideClick = new EventEmitter();
  @Input() orderData: ProductType[];
  constructor(private fb: FormBuilder, private cartService: CartService) {}

  public form: FormGroup;


  ngOnInit(): void {
    this.form = this.fb.group({
      name: '',
      phone: '',
      message: '',
    });
  }
}
