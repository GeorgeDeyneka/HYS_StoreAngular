import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'administration',
    loadChildren: () => import('./administration/administration-routing.module').then(
      (m) => m.AdministrationRoutingModule
    )
  },
  {
    path: '',
    loadChildren: () =>
      import('./store/store-routing.module').then(
        (m) => m.StoreRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
