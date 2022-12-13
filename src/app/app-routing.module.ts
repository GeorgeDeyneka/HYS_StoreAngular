import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products',
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./store/store-routing.module').then(
        (m) => m.StoreRoutingModule
      ),
  },
  {
    path: 'administration',
    loadChildren: () => import('./administration/administration-routing.module').then(
      (m) => m.AdministrationRoutingModule
    )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
