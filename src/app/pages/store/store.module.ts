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
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CartModalComponent } from './shared/cart-modal/cart-modal.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartOrderComponent } from './cart/cart-order/cart-order.component';
import { OrderModalComponent } from './shared/order-modal/order-modal.component';
import { BurgerMenuComponent } from './shared/mobile-menu/burger-menu/burger-menu.component';
import { OpenBtnComponent } from './shared/mobile-menu/burger-menu/open-btn/open-btn.component';
import { CloseBtnComponent } from './shared/mobile-menu/burger-menu/close-btn/close-btn.component';
import { PcMenuComponent } from './shared/pc-menu/pc-menu.component';
import { MobileMenuComponent } from './shared/mobile-menu/mobile-menu.component';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  declarations: [
    StoreComponent,
    ProductItemComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailsComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    WelcomePageComponent,
    CartModalComponent,
    CartOrderComponent,
    OrderModalComponent,
    BurgerMenuComponent,
    OpenBtnComponent,
    CloseBtnComponent,
    PcMenuComponent,
    MobileMenuComponent,
    FavoritesComponent,
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
