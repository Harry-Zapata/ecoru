import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {
  activities = [
    { user: 'Admin1', action: 'Inicio de sesión', date: '2024-07-15' },
    { user: 'User1', action: 'Editó un viaje', date: '2024-07-14' },
    // add more activities as needed
  ];

  constructor() { }

  ngOnInit(): void {}
}
