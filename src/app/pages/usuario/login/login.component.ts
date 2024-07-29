import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string | undefined;
  password: string | undefined;
  rememberMe: boolean = false;

  constructor(private router: Router) {}

  onSubmit() {
    if (this.username === 'admin' && this.password === 'admin123') {
      localStorage.setItem('user', 'admin');
      this.router.navigate(['/home']);
    } else if (this.username === 'user' && this.password === 'user123') {
      localStorage.setItem('user', 'user');
      this.router.navigate(['/home']);
    } else if (this.username === 'milagritos' && this.password === 'milagritos123') {
      localStorage.setItem('user', 'Milagritos Chavez Gutierres Lopez');
      this.router.navigate(['/home']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }

  onForgotPassword() {
    alert('Funcionalidad de recordar contraseña aún no implementada');
  }
}
