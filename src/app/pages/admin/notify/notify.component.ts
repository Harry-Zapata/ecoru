// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-notification',
//   templateUrl: './notify.component.html',
//   styleUrls: ['./notify.component.css']
// })
// export class NotifyComponent implements OnInit {
//   notifications = [
//     { id: 1, user: 'User1', message: 'Solicitud para cancelar el viaje', date: '2024-07-15', type: 'cancel' },
//     { id: 2, user: 'User2', message: 'Nueva notificación', date: '2024-07-16', type: 'info' },
//     // add more notification data as needed
//   ];
//   selectedNotification: any;

//   constructor() { }

//   ngOnInit(): void {}

//   selectNotification(notification: any): void {
//     this.selectedNotification = notification;
//   }

//   approveRequest(id: number): void {
//     // Logic to approve the request
//     alert('Solicitud aprobada.');
//   }

//   rejectRequest(id: number): void {
//     // Logic to reject the request
//     alert('Solicitud rechazada.');
//   }

//   deleteNotification(id: number): void {
//     this.notifications = this.notifications.filter(notification => notification.id !== id);
//   }
// }



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit {
  notifications = [
    { id: 1, user: 'User1', message: 'Solicitud para cancelar el viaje', date: '2024-07-15', type: 'cancel' },
    { id: 2, user: 'User2', message: 'Nueva notificación', date: '2024-07-16', type: 'info' },
    // add more notification data as needed
  ];
  selectedNotification: any;

  constructor() { }

  ngOnInit(): void {}

  selectNotification(notification: any): void {
    this.selectedNotification = notification;
  }

  approveRequest(id: number): void {
    console.log(`Solicitud ${id} aprobada con éxito.`);
    // Aquí iría la lógica para aprobar la solicitud, simulando una acción en el sistema.
  }

  rejectRequest(id: number): void {
    console.log(`Solicitud ${id} rechazada con éxito.`);
    // Aquí iría la lógica para rechazar la solicitud, simulando una acción en el sistema.
  }

  confirmApprove(id: number): void {
    // Aquí se podría mostrar una confirmación antes de aprobar la solicitud, pero solo para simulación.
  }

  confirmReject(id: number): void {
    // Aquí se podría mostrar una confirmación antes de rechazar la solicitud, pero solo para simulación.
  }

  deleteNotification(id: number): void {
    console.log(`Notificación ${id} eliminada con éxito.`);
    // Aquí iría la lógica para eliminar la notificación, simulando una acción en el sistema.
  }

  confirmDelete(id: number): void {
    // Aquí se podría mostrar una confirmación antes de eliminar la notificación, pero solo para simulación.
  }
}
