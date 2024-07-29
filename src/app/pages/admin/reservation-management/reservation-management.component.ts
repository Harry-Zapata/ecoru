import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-management',
  templateUrl: './reservation-management.component.html',
  styleUrls: ['./reservation-management.component.css']
})
export class ReservationManagementComponent implements OnInit {
  reservations = [
    { id: 1, user: 'User1', dates: '2024-07-01 to 2024-07-05', status: 'Active', totalPrice: 500 },
    { id: 2, user: 'User2', dates: '2024-06-15 to 2024-06-20', status: 'Canceled', totalPrice: 300 },
    // add more reservation data as needed
  ];
  selectedReservation: any;

  constructor() { }

  ngOnInit(): void {}

  selectReservation(reservation: any): void {
    this.selectedReservation = reservation;
  }

  printReservation(): void {
    const printContents = document.getElementById('printSection')!.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  }
}
