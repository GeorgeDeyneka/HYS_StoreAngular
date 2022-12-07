import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, SharedModule],
  exports: [ProductsComponent],
})
export class ProductsModule {}
