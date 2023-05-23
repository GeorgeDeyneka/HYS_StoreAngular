import { Router } from '@angular/router';
import { AuthService } from './../../shared/services/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { throwError, Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public showLabel: boolean;
  public formSub$: Subscription;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  makeAuthRequest() {
    console.log(this.form.getRawValue())
    this.authService
      .logIn<{ access_token: string }>(this.form.getRawValue())
      .subscribe({
        next: (response) => {
          this.authService.setAuthToken(response.access_token);
          this.router.navigateByUrl('/administration');
          this.showLabel = false;
        },
        error: (error) => {
          if (error.error.statusCode === 401) {
            this.showLabel = true;
          } else {
            throwError(() => error);
          }
        },
      });
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: '',
      password: '',
    });

    this.formSub$ = this.form.valueChanges.subscribe((value) => {
      if (value.password || value.username) {
        this.showLabel = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.formSub$.unsubscribe();
  }
}
