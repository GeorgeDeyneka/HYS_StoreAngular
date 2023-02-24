import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { HighlightPriceDirective } from './directives/highlight-price.directive';
import { UahPipe } from './pipes/uah.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './tooltip/counter/counter.component';
import { ButtonComponent } from './tooltip/button/button.component';
import { ModalComponent } from './modals/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ButtonMenuComponent } from './tooltip/button-menu/button-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { TableComponent } from './components/table/table.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { WarnModalComponent } from './modals/warn-modal/warn-modal.component';

@NgModule({
  declarations: [
    UahPipe,
    HighlightPriceDirective,
    CounterComponent,
    ButtonComponent,
    ModalComponent,
    ButtonMenuComponent,
    TableComponent,
    FilterBarComponent,
    WarnModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    UahPipe,
    HighlightPriceDirective,
    CounterComponent,
    ButtonComponent,
    ButtonMenuComponent,
    TableComponent,
    FilterBarComponent,
  ],
})
export class SharedModule {}
