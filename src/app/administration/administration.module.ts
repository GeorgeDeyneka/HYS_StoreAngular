import { AdministrationRoutingModule } from './administration-routing.module';
import { ProductsModule } from './products/products.module';
import { RouterModule } from '@angular/router';
import { AdministrationComponent } from './administration.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideBarComponent } from './side-bar/side-bar.component';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [AdministrationComponent, SideBarComponent],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    RouterModule,
    UsersModule,
    ProductsModule,
  ],
  exports: [AdministrationComponent],
})
export class AdministrationModule {}
