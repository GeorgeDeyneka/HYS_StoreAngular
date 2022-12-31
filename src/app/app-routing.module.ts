import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'administration',
    loadChildren: () => import('./pages/administration/administration.module').then(
      (m) => m.AdministrationModule
    )
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/store/store.module').then(
        (m) => m.StoreModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
