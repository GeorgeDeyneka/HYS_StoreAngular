import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageForbiddenComponent } from './page-forbidden/page-forbidden.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageUnathorizedComponent } from './page-unathorized/page-unathorized.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'error/404',
        pathMatch: 'full',
        component: PageNotFoundComponent,
      },
      {
        path: 'error/401',
        pathMatch: 'full',
        component: PageUnathorizedComponent,
      },
      {
        path: 'error/403',
        pathMatch: 'full',
        component: PageForbiddenComponent,
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'error/404',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorsPagesRoutingModule {}
