import { ProductItemComponent } from './products/product-item/product-item.component';
import { LandingComponent } from './landing.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'prod',
    component: ProductItemComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LandingRoutingModule {}
