import { CartService } from '../../services/cart.service';
import { Product } from '../../../models/interfaces/products.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  @Input() prod: Product;
  @Output() countClick = new EventEmitter();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  changeCounter(doing: 'plus' | 'minus', elem: Product): void {
    doing === 'plus'
      ? this.cartService.plusCounter(elem)
      : this.cartService.minusCounter(elem);
  }
}
