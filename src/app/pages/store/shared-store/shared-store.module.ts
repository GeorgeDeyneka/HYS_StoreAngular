import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { CartModalComponent } from './components/cart-modal/cart-modal.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    ProductItemComponent,
    HeaderBarComponent,
    CartModalComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [
    ProductItemComponent,
    HeaderBarComponent,
    CartModalComponent,
    FooterComponent,
  ],
})
export class SharedStoreModule {}
