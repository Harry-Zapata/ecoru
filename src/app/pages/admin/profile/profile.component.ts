import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  editMode = false;

  editarPerfil() {
    this.editMode = true;
  }

  cancelarEdicion() {
    this.editMode = false;
  }

  guardarCambios() {
    // Aquí simularías la lógica para guardar los cambios
    this.editMode = false; // Después de guardar, desactiva el modo de edición
  }
}