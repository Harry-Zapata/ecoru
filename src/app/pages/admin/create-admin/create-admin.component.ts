import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent {
  username: string = '';
  password: string = '';
  fullName: string = '';

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    const newAdmin = {
      username: this.username,
      password: this.password,
      fullName: this.fullName,
      type: 'admin'
    };

    if (this.userService.registerUser(newAdmin)) {
      alert('Administrador registrado exitosamente');
      this.router.navigate(['/admin-dashboard']); // Cambia esto por la ruta deseada después del registro
    } else {
      alert('El nombre de usuario ya existe. Por favor, elige otro.');
    }
  }
}
