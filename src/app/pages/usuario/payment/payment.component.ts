import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  trip: any;
  cantidadAsientos: number = 1; // Variable para almacenar la cantidad de asientos a reservar
  costoTotal: number = 0; // Variable para almacenar el costo total calculado
  form: FormGroup;

  contador = 0;
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      nombre: [''],
      apellidos: [''],
      dni: [''],
      telefono: [''],
      email: [''],
      metodoPago: [''],
      numeroTarjeta: [''],
      codigoVerificacion: [''],
      fechaExpiracion: [''],
      captcha: ['']
    })
  }
  // Supongamos que estos son los asientos disponibles
  asientosDisponibles: number[] = [1, 2, 3, 4, 5];

  ngOnInit(): void {
    this.trip = history.state.trip;
    this.actualizarCostoTotal();
  }

  goBack(): void {
    this.router.navigate(['']);
  }

  actualizarCostoTotal(): void {
    // Calcula el costo total multiplicando el costo del viaje por la cantidad de asientos a reservar
    this.costoTotal = this.trip?.cost * this.cantidadAsientos;
  }


  reservarAsientos() {
    let fecha = new Date();
    let formattedDate = `${fecha.getFullYear()}-${(fecha.getMonth() + 1).toString().padStart(2, '0')}-${fecha.getDate().toString().padStart(2, '0')}`;
    let obj:any = {
      name: this.form.value['nombre'],
      apellidos: this.form.value['apellidos'],
      telefono: this.form.value['telefono'],
      dni: this.form.value['dni'],
      metodoPago: this.form.value['metodoPago'],
      fechaEmision: formattedDate,
      fechaViaje: this.trip?.startDate,
      descripcion: this.trip?.description,
      destino: this.trip?.name,
      resevas: this.cantidadAsientos,
      placaBus: this.trip?.busPlate,
      estacion: this.trip?.busLocation,
      ubicacion: this.trip?.busLocation,
      montoTotal: this.costoTotal
    }
    this.contador++;
    obj['id'] = this.contador;

    let Trips = JSON.parse(localStorage.getItem('trips') || '[]');

    Trips.forEach((trip: any) => {
      if (trip.id == this.trip?.id) {
        trip.seatsAvailable = trip.seatsAvailable - this.cantidadAsientos;
      }
    })

    localStorage.setItem('trips', JSON.stringify(Trips));

    let boletas = JSON.parse(localStorage.getItem('boletas') || '[]');
    boletas.push(obj);
    localStorage.setItem('boletas', JSON.stringify(boletas));

    this.router.navigate(['/boleta/' + this.contador]);
  }

}
