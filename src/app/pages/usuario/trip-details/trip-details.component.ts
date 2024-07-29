import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrl: './trip-details.component.css'
})
export class TripDetailsComponent implements OnInit {
  trip: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.trip = history.state.trip;
  }

  goBack(): void {
    this.router.navigate(['']);
  }
  verDetalles(trip: any): void {
    this.router.navigate(['/payment'], { state: { trip } });
    // Navega a la ruta `/trip-details` y pasa el objeto `trip` en el estado de la historia.
  }
}