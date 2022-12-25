import { SharedAdminModule } from './shared-admin/shared-admin.module';
import { AdministrationRoutingModule } from './administration-routing.module';
import { ProductsModule } from './products/products.module';
import { RouterModule } from '@angular/router';
import { AdministrationComponent } from './administration.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [AdministrationComponent],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    RouterModule,
    UsersModule,
    ProductsModule,
    SharedAdminModule
  ],
  exports: [AdministrationComponent],
})
export class AdministrationModule {}
