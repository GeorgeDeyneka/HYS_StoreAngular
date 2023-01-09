import { AdministrationRoutingModule } from './administration-routing.module';
import { ProductsModule } from './products/products.module';
import { RouterModule } from '@angular/router';
import { AdministrationComponent } from './administration.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersModule } from './users/users.module';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [AdministrationComponent, SideBarComponent],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    RouterModule,
    UsersModule,
    ProductsModule,
    SharedModule,
  ],
  exports: [AdministrationComponent],
})
export class AdministrationModule {}
