// register.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  lastname: string = '';
  documentType: string = '';
  documentNumber: string = '';
  phone: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private userService: UserService, private router: Router) {}

  onRegister() {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const user = {
      username: this.email,
      password: this.password,
      name: this.name,
      lastname: this.lastname,
      documentType: this.documentType,
      documentNumber: this.documentNumber,
      phone: this.phone,
      type: 'client',
      fullName: `${this.name} ${this.lastname}`
    };

    this.userService.registerUser(user);
    alert('Usuario registrado con éxito');
    this.router.navigate(['/login']);
  }
}