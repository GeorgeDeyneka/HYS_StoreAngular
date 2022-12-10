import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderBarComponent } from '../header-bar/header-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    ProductsComponent,
    HeaderBarComponent,
    FooterComponent,
    ProductDetailsComponent,
    ProductListComponent,
    CartComponent
  ],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [ProductsComponent],
})
export class ProductsModule {}
