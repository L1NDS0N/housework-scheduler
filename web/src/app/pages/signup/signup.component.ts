import { Component } from '@angular/core';
import { IUser } from 'src/app/services/authentication.service';
import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  user = {} as IUser;

  constructor(private authService: AuthenticationService) {}

  register() {
    if (
      !this.user.name ||
      !this.user.password ||
      !this.user.confirmPassword ||
      !this.user.email
    ) {
      alert('informe os campos, todos são requeridos.');
      return;
    }
    if (this.user.password != this.user.confirmPassword) {
      alert('as senhas não conferem, revise-as');
      return;
    }

    try {
      this.authService.signup(this.user).subscribe((res) => {
        this.authService.setUserCredentials(res);
        this.authService.redirect(['/dashboard']);
        this.cleanUser();
      });
    } catch (error) {
      alert(error ? error : 'Erro durante criação do usuário');
    }
  }
  cleanUser() {
    this.user = {} as IUser;
  }
}
