import {  Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-trip',
    templateUrl: './add-trip.component.html',
    styleUrl: './add-trip.component.css'
  })
export class AddTripComponent {
logout() {
throw new Error('Method not implemented.');
} 

  constructor(private router: Router) {}
}
