import { SharedModule } from 'src/app/shared/shared.module';
import { SharedAdminModule } from './../shared-admin/shared-admin.module';
import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, UsersRoutingModule, SharedAdminModule, SharedModule],
})
export class UsersModule {}
