// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    if (this.userService.loginUser(this.username, this.password)) {
      if (this.userService.isAdmin()) {
        this.router.navigate(['/list']);
      } else {
        this.router.navigate(['/home']);
      }
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }

  onForgotPassword() {
    alert('Funcionalidad de recordar contraseña aún no implementada');
  }
}