import { RouterModule } from '@angular/router';
import { AdministrationComponent } from './administration.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideBarComponent } from './side-bar/side-bar.component';
import { SharedModule } from '../shared/shared.module';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AdministrationComponent,
    SideBarComponent,
    UsersComponent,
    ProductsComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule, MatProgressSpinnerModule],
  exports: [AdministrationComponent],
})
export class AdministrationModule {}
