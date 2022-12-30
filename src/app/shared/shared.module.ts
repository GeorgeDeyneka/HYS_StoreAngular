import { RouterModule } from '@angular/router';
import { HighlightPriceDirective } from './directives/highlight-price.directive';
import { UahPipe } from './pipes/uah.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from '../errors/page-not-found/page-not-found.component';
import { CounterComponent } from './tooltip/counter/counter.component';
import { ButtonComponent } from './tooltip/button/button.component';
import { ModalComponent } from './modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    UahPipe,
    HighlightPriceDirective,
    PageNotFoundComponent,
    CounterComponent,
    ButtonComponent,
    ModalComponent,
  ],
  imports: [CommonModule, RouterModule, MatDialogModule, MatInputModule, FormsModule, ReactiveFormsModule],
  exports: [
    UahPipe,
    HighlightPriceDirective,
    CounterComponent,
    PageNotFoundComponent,
    ButtonComponent,
  ],
})
export class SharedModule {}
