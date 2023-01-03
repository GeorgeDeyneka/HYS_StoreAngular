import { SharedModule } from 'src/app/shared/shared.module';
import { SharedAdminModule } from '../shared-admin/shared-admin.module';
import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    SharedAdminModule,
    SharedModule,
  ],
})
export class UsersModule {}
