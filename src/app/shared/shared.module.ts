import { RouterModule } from '@angular/router';
import { HighlightPriceDirective } from './directives/highlight-price.directive';
import { UahPipe } from './pipes/uah.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from '../errors/page-not-found/page-not-found.component';
import { CounterComponent } from './tooltip/counter/counter.component';
import { ButtonComponent } from './tooltip/button/button.component';

@NgModule({
  declarations: [
    UahPipe,
    HighlightPriceDirective,
    PageNotFoundComponent,
    CounterComponent,
    ButtonComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    UahPipe,
    HighlightPriceDirective,
    CounterComponent,
    PageNotFoundComponent,
    ButtonComponent,
  ],
})
export class SharedModule {}
