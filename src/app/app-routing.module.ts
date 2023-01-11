import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'administration',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/administration/administration.module').then(
        (m) => m.AdministrationModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/store/store.module').then((m) => m.StoreModule),
  },
  {
    path: '',
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
