import { HttpProduct } from './../../../models/interfaces/http-product.interface';
import { CartService } from '../../services/cart.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  @Input() prod: HttpProduct;
  @Output() countClick = new EventEmitter();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  changeCounter(doing: 'plus' | 'minus', elem: HttpProduct): void {
    doing === 'plus'
      ? this.cartService.plusCounter(elem)
      : this.cartService.minusCounter(elem);
  }
}
