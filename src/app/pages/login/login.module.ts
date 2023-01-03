import { SharedModule } from './../../shared/shared.module';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedAdminModule } from '../administration/shared-admin/shared-admin.module';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedAdminModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
