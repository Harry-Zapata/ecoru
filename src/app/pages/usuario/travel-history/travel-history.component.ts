import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-history',
  templateUrl: './travel-history.component.html',
  styleUrls: ['./travel-history.component.css']
})
export class TravelHistoryComponent implements OnInit {
  trips = [
    { id: 1, dates: '2024-07-01 to 2024-07-05', quantity: 2, totalPrice: 200, status: 'Active' },
    { id: 2, dates: '2024-06-15 to 2024-06-20', quantity: 1, totalPrice: 100, status: 'Completed' },
    // add more trip data as needed
  ];
  selectedTrip: any;
  editReason: string = '';

  constructor() { }

  ngOnInit(): void {}

  selectTrip(trip: any): void {
    this.selectedTrip = trip;
  }

  canEdit(trip: any): boolean {
    const currentTime = new Date().getTime();
    const tripEndTime = new Date(trip.dates.split(' to ')[1]).getTime();
    return (currentTime - tripEndTime) < (48 * 60 * 60 * 1000);
  }

  submitEditTrip(): void {
    console.log('Edit reason:', this.editReason);
    this.selectedTrip.status = 'Pending';
    this.editReason = '';
  }
}
///falta arreglar para imprimir y editar el estado del viaje del usuario 