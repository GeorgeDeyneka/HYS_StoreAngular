import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderBarComponent } from '../header-bar/header-bar.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  declarations: [ProductsComponent, HeaderBarComponent, FooterComponent],
  imports: [CommonModule, SharedModule],
  exports: [ProductsComponent],
})
export class ProductsModule {}
