import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
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
import { ProductItemComponent } from './shared/product-item/product-item.component';
import { HeaderBarComponent } from './shared/header-bar/header-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CartModalComponent } from './shared/cart-modal/cart-modal.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartOrderComponent } from './cart/cart-order/cart-order.component';
import { OrderModalComponent } from './shared/order-modal/order-modal.component';

@NgModule({
  declarations: [
    StoreComponent,
    ProductItemComponent,
    HeaderBarComponent,
    FooterComponent,
    ProductDetailsComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    WelcomePageComponent,
    CartModalComponent,
    CartOrderComponent,
    OrderModalComponent,
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    SharedModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [StoreComponent],
})
export class StoreModule {}
