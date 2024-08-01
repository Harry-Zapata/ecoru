import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrl: './edit-trip.component.css'
})
export class EditTripComponent implements OnInit {
  trips: any;
  editarForm: FormGroup;
  editID!: number;
  deleteId!: number;
  dataEditar!: any;
  idHabilitar!: number;

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

    let desactivados: any = [];
    this.trips.forEach((trip: any) => {
      if (trip.estado === 'Inactivo') {
        desactivados.push(trip);
      }
    })
    this.trips = desactivados;
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

    this.ngOnInit();
    this.cerrarModal("editModal");
  }

  eliminar() {
    this.trips.forEach((trip: any) => {
      if (trip.id == this.deleteId) {
        this.trips.splice(this.trips.indexOf(trip), 1);
      }
    })
    this.cerrarModal("deleteModal");
    localStorage.setItem('trips', JSON.stringify(this.trips));
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

  habilitar() {
    let tripsArray = localStorage.getItem('trips');

    if (tripsArray) {
      let tripsA = JSON.parse(tripsArray);
      tripsA.forEach((trip: any) => {
        if (trip.id == this.idHabilitar) {
          trip.estado = 'Activo';
        }
      })
      localStorage.setItem('trips', JSON.stringify(tripsA));
    }

    this.ngOnInit();
    this.cerrarModal("setNewModal");
  }
  pasarIDDelete(id: any) {
    this.deleteId = id;
  }

  pasarIdHabilitar(id: any) {
    this.idHabilitar = id;
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
