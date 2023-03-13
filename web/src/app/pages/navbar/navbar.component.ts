import {
  AuthenticationService,
  IUserAuthenticated,
  useUserInfo,
} from './../../services/authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  user: IUserAuthenticated = {} as IUserAuthenticated;
  constructor(private authService: AuthenticationService) {}

  logout() {
    this.authService.logout('/login');
  }
  ngOnInit(): void {
    this.user = useUserInfo();
  }
}
