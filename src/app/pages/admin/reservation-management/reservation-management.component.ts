import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-management',
  templateUrl: './reservation-management.component.html',
  styleUrls: ['./reservation-management.component.css']
})
export class ReservationManagementComponent implements OnInit {
  reservations = [
    { id: 1, user: 'Milagros', dates: '2024-07-01 to 2024-07-05', status: 'Active', totalPrice: 'S/500' },
    { id: 2, user: 'Jhovanny', dates: '2024-06-15 to 2024-06-20', status: 'Canceled', totalPrice: 'S/300' },
    { id:3, user: 'Astrid', dates: '2024-o7-24 to 2024-07-31', status:'Activado' ,totalPrice:'S/200'},
    // add more reservation data as needed
  ];
  selectedReservation: any;

  // Static data for the company
  companyName = 'TRANSPORTES XYZ S.A.C.';
  ruc = '12345678901';

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
