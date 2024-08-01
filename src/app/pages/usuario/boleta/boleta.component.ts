import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boleta',
  templateUrl: './boleta.component.html',
  styleUrl: './boleta.component.css'
})
export class BoletaComponent implements OnInit {
  constructor(
    private router: Router
  ) { }
  boleta: any = {}
  ngOnInit(): void {
    let boletas = JSON.parse(localStorage.getItem('boletas') || '[]');
    let url = window.location.href;
    let id = url.split('/').pop();
    this.boleta = boletas.find((boleta:any) => boleta.id == id);

    let pasajeros = JSON.parse(localStorage.getItem('dataPasajeros') || '[]');
    this.boleta['pasajeros'] = pasajeros;

    console.log(this.boleta);
  }
  volverAInicio(){
    this.router.navigate(['/']);
  }
  imprimirComprobante(){
    // Imprimir solo seccion de comprobante
    window.print();
    
  }
}
