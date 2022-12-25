import { StoreRoutingModule } from './store-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { SharedStoreModule } from './shared-store/shared-store.module';

@NgModule({
  declarations: [
    StoreComponent,
    ProductDetailsComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    WelcomePageComponent,
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    SharedModule,
    SharedStoreModule,
    RouterModule,
    MatProgressSpinnerModule,
  ],
  exports: [StoreComponent],
})
export class StoreModule {}
