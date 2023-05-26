import { PageNotFoundComponent } from '../errors-pages/page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StoreComponent } from './store.component';
import { CartComponent } from './cart/cart.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { FavoritesComponent } from './favorites/favorites.component';
// import { DetailsGuard } from 'src/app/shared/guards/details.guard';

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
        path: 'products/favorites',
        pathMatch: 'full',
        component: FavoritesComponent,
      },
      {
        path: 'products/cart',
        pathMatch: 'full',
        component: CartComponent,
      },
      {
        path: 'products/:id',
        // canActivate: [DetailsGuard],
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
export class StoreRoutingModule {}
