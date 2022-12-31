import { PageNotFoundComponent } from '../errors-pages/page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StoreComponent } from './store.component';
import { CartComponent } from './cart/cart.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  {
    path: '',
    component: StoreComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: WelcomePageComponent,
      },
      {
        path: 'products',
        pathMatch: 'full',
        component: ProductListComponent,
      },
      {
        path: 'products/cart',
        pathMatch: 'full',
        component: CartComponent,
      },
      {
        path: 'products/:id',
        pathMatch: 'full',
        component: ProductDetailsComponent,
      },
      {
        path: '**',
        redirectTo: '404-page',
      },
      {
        path: '404-page',
        pathMatch: 'full',
        component: PageNotFoundComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class StoreRoutingModule {}
