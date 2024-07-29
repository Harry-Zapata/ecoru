import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: any;
  isAdmin: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getLoggedInUser();
    this.isAdmin = this.userService.isAdmin();
  }

  logout() {
    this.userService.logoutUser();
    window.location.reload(); // Recargar la página para reflejar el cambio en el estado de autenticación
  }
}
