import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';

@NgModule({
  declarations: [FilterBarComponent],
  imports: [CommonModule, MatSelectModule, MatInputModule],
  exports: [FilterBarComponent],
})
export class SharedAdminModule {}
