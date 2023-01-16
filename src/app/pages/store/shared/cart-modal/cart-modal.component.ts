import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { ProductType } from 'src/app/models/interfaces/product.interface';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss'],
})
export class CartModalComponent implements OnChanges {
  public arrCart: ProductType[] = [];
  public totalPrice: number;

  @Input() className: string;
  @Output() mouseClick = new EventEmitter();

  constructor(private cartService: CartService) {}

  ngOnChanges(): void {
    // this.updateData();
    this.arrCart = this.cartService.getData();
    this.totalPrice = this.calcPrice();
  }

  deleteElem(elem: ProductType): void {
    this.cartService.deleteProduct(elem);
    this.arrCart = this.cartService.getData();
  }

  updateData(): void {
    this.arrCart = this.cartService.getData();
    this.totalPrice = this.calcPrice();

    if (!this.arrCart.length) {
      this.mouseClick.emit();
    }
  }

  calcPrice(): number {
    return this.cartService.calculateTotalPrice();
  }
}
