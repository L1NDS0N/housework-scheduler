import { Router, Routes } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Injectable } from '@angular/core';
import { AppConfig } from '../app.config';
import { lastValueFrom } from 'rxjs';

export interface IUser {
  email: string;
  password: string;
  name?: string;
  rememberMe?: boolean;
  confirmPassword?: string;
}
export interface IUserAuthenticated {
  token: string;
  user: {
    photoUrl: string;
    name: string;
    email: string;
    password: string;
  };
  message?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private apiResourceLogin = AppConfig.apiUrl + '/login';
  private apiResourceSignUp = AppConfig.apiUrl + '/signup';
  private apiResourceLoginWithGoogle = AppConfig.apiUrl + '/login-with-google';

  constructor(private api: HttpClient, private router: Router) {}

  isLoggedIn(): boolean {
    return !!useUserInfo();
  }

  redirect(toPath: any[]) {
    this.router.navigate(toPath);
  }

  signup(user: IUser) {
    return this.api.post<IUserAuthenticated>(this.apiResourceSignUp, user);
  }

  login(user: IUser) {
    return this.api.post<IUserAuthenticated>(this.apiResourceLogin, user);
  }

  loginWithGoogle(user: SocialUser) {
    return this.api.post<IUserAuthenticated>(
      this.apiResourceLoginWithGoogle,
      user
    );
  }

  logout(redirect?: string) {
    localStorage.removeItem('@hs:credentials');
    this.redirect([redirect ? redirect : null]);
  }

  setUserCredentials(user: IUserAuthenticated) {
    localStorage.setItem('@hs:credentials', JSON.stringify(user));
  }
}

const useUserInfo: () => IUserAuthenticated = () => {
  const credentials = localStorage.getItem('@hs:credentials');
  if (!credentials) return {} as IUserAuthenticated;
  return JSON.parse(credentials) as IUserAuthenticated;
};

const useMyHeaders: () => HttpHeaders = () => {
  const headers = new HttpHeaders().set(
    'Authorization',
    'Bearer ' + useUserInfo().token
  );
  return headers;
};

export { useUserInfo, useMyHeaders };
