import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'housework-schedules';

  constructor(private authService: AuthenticationService) {
    if (authService.isLoggedIn()) authService.redirect(['/dashboard']);
  }
}
