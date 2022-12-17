import { PageNotFoundComponent } from './../shared/components/page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ProductListComponent,
      },
      {
        path: 'cart',
        pathMatch: 'full',
        component: CartComponent,
      },
      {
        path: '404-page',
        pathMatch: 'full',
        component: PageNotFoundComponent,
      },
      {
        path: ':id',
        pathMatch: 'full',
        component: ProductDetailsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProductsRoutingModule {}
