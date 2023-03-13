import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import {
  AuthenticationService,
  IUser,
} from './../../services/authentication.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user: IUser = {} as IUser;

  constructor(
    private authService: AuthenticationService,
    private socialAuthService: SocialAuthService
  ) {}

  login() {
    if (!this.user) return;
    this.authService.login(this.user);

    try {
      this.authService.login(this.user).subscribe((res) => {
        this.authService.setUserCredentials(res);
        this.authService.redirect(['/dashboard']);
      });
    } catch (error) {
      alert(error ? error : 'Erro durante login');
    }
  }
  loginWithGoogle() {
    this.socialAuthService.authState.subscribe((user: SocialUser) => {
      try {
        this.authService.loginWithGoogle(user).subscribe((res) => {
          this.authService.setUserCredentials(res);
          this.authService.redirect(['/dashboard']);
        });
      } catch (error) {
        alert(error ? error : 'Erro durante login');
      }
    });
  }

  ngOnInit(): void {
    this.loginWithGoogle();
  }
}
