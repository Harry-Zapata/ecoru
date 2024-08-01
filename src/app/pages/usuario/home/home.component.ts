import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trips!:any;
  filtroBackUp: any[] = [];
  user: string | null | undefined;
  ciudades: any = []
  filtro: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) {
    this.filtro = this.fb.group({
      origen: [''],
      destino: [''],
      fechaInicio: [''],
      fechaFin: [''],
    });
  }

  ngOnInit(): void {
    this.trips = JSON.parse(localStorage.getItem('trips') || '[]');
    let data:any =[]
    this.trips.forEach((trip:any) => {
      //Flitrar por estado=Activo
      if (trip.estado === 'Activo') {
        data.push(trip);
      }
    })

  

    this.trips = data;
    this.filtroBackUp = this.trips;
    this.trips.forEach((trip:any) => {
      if (!this.ciudades.includes(trip.name)) {
        this.ciudades.push(trip.name);
      }
    })
  }
  verDetalles(trip: any): void {
    this.router.navigate(['/trip-details'], { state: { trip } });
    // Navega a la ruta `/trip-details` y pasa el objeto `trip` en el estado de la historia.
  }

  filtrarDatos() {
    this.filtroBackUp = this.trips;
    let destino = this.filtro.value['destino'];
    let origen = this.filtro.value['origen'];
    let fechaInicio = this.filtro.value['fechaInicio'];
    let fechaFin = this.filtro.value['fechaFin'];


    const coincidencias = this.filtroBackUp.some((trip) => trip.name.toLowerCase() === destino.toLowerCase());

    if (coincidencias) {
      this.filtroBackUp = this.filtroBackUp.filter((trip) => {
        return trip.name.toLowerCase() === destino.toLowerCase();
      });
    }

  }
}
