import { ProductType } from '../../../models/interfaces/product.interface';
import { CartService } from '../../services/cart.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Select } from 'src/app/models/enums/select.enum';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  @Input() prod: ProductType;
  @Output() countClick = new EventEmitter();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  changeCounter(doing: 'plus' | 'minus', elem: ProductType): void {
    doing == Select.plus
      ? this.cartService.plusCounter(elem)
      : this.cartService.minusCounter(elem);
  }
}
