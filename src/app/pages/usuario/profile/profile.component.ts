import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'] // Aquí puedes definir estilos adicionales si es necesario
})
export class ProfileComponent {

  profileImage: string;

  constructor() {
    this.profileImage = 'https://img.freepik.com/vector-premium/dibujos-animados-perfil-mujer_18591-58476.jpg';
  }

  onImageClick() {
    const fileInput = document.getElementById('image-upload') as HTMLInputElement;
    fileInput.click();
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profileImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }



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
