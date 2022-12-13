import { RouterModule } from '@angular/router';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { HighlightPriceDirective } from './directives/highlight-price.directive';
import { UahPipe } from './pipes/uah.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [
    UahPipe,
    HighlightPriceDirective,
    ProductItemComponent,
    ButtonComponent,
    PageNotFoundComponent,
    CounterComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    UahPipe,
    HighlightPriceDirective,
    ProductItemComponent,
    ButtonComponent,
    CounterComponent,
    PageNotFoundComponent,
  ],
})
export class SharedModule {}
