import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-list-trip',
  templateUrl: './list-trip.component.html',
  styleUrls: ['./list-trip.component.css']  // Corregido el nombre de la propiedad
})
export class ListTripComponent implements OnInit {
  trips: any;
  desabilitarId!: number;
  editarId!: number;
  editarForm: FormGroup;
  editID!: number;
  dataEditar!: any;
  constructor(
    private fb: FormBuilder
  ) {
    this.editarForm = this.fb.group({
      name: [''],
      description: [''],
      cost: ['']
    })
  }


  ngOnInit(): void {
    this.trips = JSON.parse(localStorage.getItem('trips') || '[]');
    let activos: any = [];
    this.trips.forEach((trip: any) => {
      if (trip.estado === 'Activo') {
        activos.push(trip);
      }
    })
    this.trips = activos;
  }

  editar() {
    let tripsArray = localStorage.getItem('trips');

    if (tripsArray) {
      let tripsA = JSON.parse(tripsArray);
      tripsA.forEach((trip: any) => {
        if (trip.id == this.editID) {
          trip.name = this.editarForm.value.name;
          trip.description = this.editarForm.value.description;
          trip.cost = this.editarForm.value.cost;
        }
      })
      localStorage.setItem('trips', JSON.stringify(tripsA));
    }

    this.cerrarModal("editModal");
  }

  pasarId(id: any) {
    this.editID = id;

    this.trips.forEach((trip: any) => {
      if (trip.id == this.editID) {
        this.dataEditar = trip;
        this.editarForm.setValue({
          'name': trip.name,
          'description': trip.description,
          'cost': trip.cost
        })
      }
    })
  }

  desabilitar() {
    let tripsArray = localStorage.getItem('trips');

    if (tripsArray) {
      let tripsA = JSON.parse(tripsArray);
      tripsA.forEach((trip: any) => {
        if (trip.id == this.desabilitarId) {
          trip.estado = 'Inactivo';
        }
      })
      localStorage.setItem('trips', JSON.stringify(tripsA));
    }

    this.ngOnInit();
    this.cerrarModal("disableModal");
  }

  pasarIdDesabilitar(id: any) {
    this.desabilitarId = id;
  }



  cerrarModal(modalElement: any) {
    console.log('Editado');
    let body = document.getElementsByTagName('body')[0] as HTMLElement;
    let modal = document.getElementById(modalElement) as HTMLElement;
    let capa = document.querySelector('.modal-backdrop');
    capa?.remove();
    modal.classList.remove('show');
    modal.style.display = 'none';
    body.classList.remove('modal-open');
    body.style.overflow = 'auto';
  }

}
