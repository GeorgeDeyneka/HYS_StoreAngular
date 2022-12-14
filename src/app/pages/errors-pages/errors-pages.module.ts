import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { ErrorsPagesRoutingModule } from './errors-pages-routing.module';
import { PageUnathorizedComponent } from './page-unathorized/page-unathorized.component';
import { PageForbiddenComponent } from './page-forbidden/page-forbidden.component';

@NgModule({
  declarations: [PageNotFoundComponent, PageUnathorizedComponent, PageForbiddenComponent],
  imports: [CommonModule, SharedModule, RouterModule, ErrorsPagesRoutingModule],
})
export class ErrorsPagesModule {}
