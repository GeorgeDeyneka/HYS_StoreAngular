import { Router } from '@angular/router';
import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}


  makeAuthRequest() {
    this.authService
      .logIn<{ access_token: string }>(this.form.getRawValue())
      .subscribe((responce) => {
        this.authService.setAuthToken(responce.access_token);
        this.router.navigateByUrl('/administration')
      });
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: '',
      password: '',
    });
  }
}
