import { ProductItemComponent } from '../landing/products/product-item/product-item.component';
import { HighlightPriceDirective } from '../highlight-price.directive';
import { UahPipe } from '../uah.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddButtonComponent } from '../landing/products/add-button/add-button.component';

@NgModule({
  declarations: [
    UahPipe,
    HighlightPriceDirective,
    ProductItemComponent,
    AddButtonComponent,
  ],
  imports: [CommonModule],
  exports: [
    UahPipe,
    HighlightPriceDirective,
    ProductItemComponent,
    AddButtonComponent,
  ],
})
export class SharedModule {}
