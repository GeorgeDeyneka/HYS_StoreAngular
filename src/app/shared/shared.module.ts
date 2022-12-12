import { ProductItemComponent } from './components/product-item/product-item.component';
import { HighlightPriceDirective } from './directives/highlight-price.directive';
import { UahPipe } from './pipes/uah.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    UahPipe,
    HighlightPriceDirective,
    ProductItemComponent,
    ButtonComponent,
  ],
  imports: [CommonModule],
  exports: [
    UahPipe,
    HighlightPriceDirective,
    ProductItemComponent,
    ButtonComponent,
  ],
})
export class SharedModule {}
