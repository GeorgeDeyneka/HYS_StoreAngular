import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'administration',
    loadChildren: () =>
      import('./pages/administration/administration.module').then(
        (m) => m.AdministrationModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/store/store.module').then((m) => m.StoreModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '**',
    redirectTo: 'error',
  },
  {
    path: 'error',
    loadChildren: () =>
      import('./pages/errors-pages/errors-pages.module').then(
        (m) => m.ErrorsPagesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
