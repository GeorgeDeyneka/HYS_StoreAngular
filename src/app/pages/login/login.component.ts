import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<LoginComponent>,
    private authService: AuthService
  ) {}

  onNoClose(): void {
    this.dialogRef.close();
  }

  makeAuthRequest() {
    this.authService
      .logIn<{ access_token: string }>(this.form.getRawValue())
      .subscribe((responce) => {
        this.authService.setAuthToken(responce.access_token);
        this.dialogRef.close();
      });
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: '',
      password: '',
    });
  }
}
