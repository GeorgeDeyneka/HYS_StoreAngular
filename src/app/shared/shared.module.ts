import { RouterModule } from '@angular/router';
import { HighlightPriceDirective } from './directives/highlight-price.directive';
import { UahPipe } from './pipes/uah.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from '../pages/errors-pages/page-not-found/page-not-found.component';
import { CounterComponent } from './tooltip/counter/counter.component';
import { ButtonComponent } from './tooltip/button/button.component';
import { ModalComponent } from './modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ButtonMenuComponent } from './tooltip/button-menu/button-menu.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    UahPipe,
    HighlightPriceDirective,
    PageNotFoundComponent,
    CounterComponent,
    ButtonComponent,
    ModalComponent,
    ButtonMenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    UahPipe,
    HighlightPriceDirective,
    CounterComponent,
    PageNotFoundComponent,
    ButtonComponent,
    ButtonMenuComponent,
  ],
})
export class SharedModule {}
