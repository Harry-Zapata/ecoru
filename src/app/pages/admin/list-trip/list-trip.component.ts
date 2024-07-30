import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-list-trip',
  templateUrl: './list-trip.component.html',
  styleUrls: ['./list-trip.component.css']  // Corregido el nombre de la propiedad
})
export class ListTripComponent implements OnInit {

  ciudades: string[] = [];
  filtro: FormGroup;
  filtroBackUp: any = [];
  constructor(
    private fb: FormBuilder
  ) {
    this.filtro = this.fb.group({
      origen: [''],
      destino: [''],
      fechaInicio: [''],
      fechaFin: ['']
    })
  }

  trips = [
    { image: 'https://www.peru.travel/Contenido/Destino/Imagen/es/8/1.4/Principal/lima-banner-3.jpg', description: 'Lima, la ciudad de cerros con lunas', name: 'Lima', cost: 1000, startDate: '2024-07-01', endDate: '2024-07-10', busName: 'Bus XYZ', busPlate: 'ABC-123', busLocation: 'Terminal Central', seatsAvailable: 20 },
    { image: 'https://media.istockphoto.com/id/458569733/es/foto/city-square-en-ayacucho-per%C3%BA.jpg?s=612x612&w=0&k=20&c=8eVqNlaNJLdHYIpPoI8HQ-rOvfi9EKkCl4rkEwYa9bc=', description: 'Ayacucho abrigador', name: 'Ayacucho', cost: 1000, startDate: '2024-07-01', endDate: '2024-07-10', busName: 'Bus abc', busPlate: 'ABC-123', busLocation: 'Terminal Central', seatsAvailable: 20 },
    { image: 'https://www.plataforma10.com.pe/viajes/wp-content/uploads/2023/05/cajamarca-aerea.webp', description: 'Cajamarca Celestial', name: 'Cajamarca', cost: 1000, startDate: '2024-07-01', endDate: '2024-07-10', busName: 'Bus XYZ', busPlate: 'ABC-123', busLocation: 'Terminal Central', seatsAvailable: 20 },
    { image: 'https://cdn.pixabay.com/photo/2017/05/12/23/09/arequipa-2308382_1280.jpg', description: 'Arequipa místico', name: 'Arequipa', cost: 1000, startDate: '2024-07-01', endDate: '2024-07-10', busName: 'Bus XYZ', busPlate: 'ABC-123', busLocation: 'Terminal Central', seatsAvailable: 20 },
    { image: 'https://media.istockphoto.com/id/515972508/es/foto/plaza-de-armas.jpg?s=612x612&w=0&k=20&c=G3WFkOR2nrVOKpDwpenPqUrp9_lFJFjJ6M6ItuPz79Q=', description: 'Cusco extrovertido', name: 'Cusco', cost: 1000, startDate: '2024-07-01', endDate: '2024-07-10', busName: 'Bus XYZ', busPlate: 'ABC-123', busLocation: 'Terminal Central', seatsAvailable: 20 },
    { image: 'https://elcomercio.pe/resizer/cwJfD7zYu2qtN76bk6s0eH9v-gA=/1200x900/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/JUTY3PKYF5DQPLDSGQHVY5OMT4.jpg', description: 'Lambayeque único', name: 'Lambayeque', cost: 1000, startDate: '2024-07-01', endDate: '2024-07-10', busName: 'Bus XYZ', busPlate: 'ABC-123', busLocation: 'Terminal Central', seatsAvailable: 20 },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN8k_-U-tK_v_o-uLxnZKUGFyQ6zzLCHWHgA&s', description: 'Junín deseable', name: 'Junin', cost: 1000, startDate: '2024-07-01', endDate: '2024-07-10', busName: 'Bus XYZ', busPlate: 'ABC-123', busLocation: 'Terminal Central', seatsAvailable: 20 },
    { image: 'https://www.xtravelperu.com/blog/wp-content/uploads/2023/06/puno-imagen-xtravel.jpg', description: 'Puno cálido', name: 'Puno', cost: 1000, startDate: '2024-07-01', endDate: '2024-07-10', busName: 'Bus XYZ', busPlate: 'ABC-123', busLocation: 'Terminal Central', seatsAvailable: 20 },
    { image: 'https://e.rpp-noticias.io/large/2014/08/01/1068979.jpg', description: 'Cascas inolvidable', name: 'Cascas', cost: 1000, startDate: '2024-07-01', endDate: '2024-07-10', busName: 'Bus XYZ', busPlate: 'ABC-123', busLocation: 'Terminal Central', seatsAvailable: 20 },
    { image: 'https://noticias-pe.laiglesiadejesucristo.org/media/960x540/Chimbote-2.jpg', description: 'Chimbote mágico', name: 'Chimbote', cost: 1000, startDate: '2024-07-01', endDate: '2024-07-10', busName: 'Bus XYZ', busPlate: 'ABC-123', busLocation: 'Terminal Central', seatsAvailable: 20 },// Otros viajes aquí
  ];
  ngOnInit(): void {
    this.filtroBackUp = this.trips;
    this.trips.forEach((trip) => {
      this.ciudades.push(trip.name);
    })
  }

  filtrarDatos() {
    this.filtroBackUp = this.trips;
    let destino = this.filtro.value['destino'];
    let origen = this.filtro.value['origen'];
    let fechaInicio = this.filtro.value['fechaInicio'];
    let fechaFin = this.filtro.value['fechaFin'];


    const coincidencias = this.filtroBackUp.some((trip: any) => trip.name.toLowerCase() === destino.toLowerCase());

    if (coincidencias) {
      this.filtroBackUp = this.filtroBackUp.filter((trip: any) => {
        return trip.name.toLowerCase() === destino.toLowerCase();
      });
    }

  }
}
