import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrl: './edit-trip.component.css'
})
export class EditTripComponent {
  trips = [
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Mancorabeach1.jpg/800px-Mancorabeach1.jpg', description: 'Lima, la ciudad de cerros con lunas', name: 'MANCORA', cost: 1000, startDate: '2024-07-01', endDate: '2024-07-10', busName: 'Bus XYZ', busPlate: 'ABC-123', busLocation: 'Terminal Central', seatsAvailable: 20 },
    { image: 'https://mediaim.expedia.com/destination/1/d72390e88197da3ae0d70a23fb6af4f9.jpg"', description: 'Ayacucho abrigador', name: 'Cajamarca', cost: 1000, startDate: '2024-07-01', endDate: '2024-07-10', busName: 'Bus abc', busPlate: 'ABC-123', busLocation: 'Terminal Central', seatsAvailable: 20 },
    { image: 'https://www.plataforma10.com.pe/viajes/wp-content/uploads/2023/05/cajamarca-aerea.webp', description: 'Cajamarca Celestial', name: 'Cajamarca', cost: 1000, startDate: '2024-07-01', endDate: '2024-07-10', busName: 'Bus XYZ', busPlate: 'ABC-123', busLocation: 'Terminal Central', seatsAvailable: 20 },
    { image: 'https://cdn.pixabay.com/photo/2017/05/12/23/09/arequipa-2308382_1280.jpg', description: 'Arequipa místico', name: 'Arequipa', cost: 1000, startDate: '2024-07-01', endDate: '2024-07-10', busName: 'Bus XYZ', busPlate: 'ABC-123', busLocation: 'Terminal Central', seatsAvailable: 20 },
    { image: 'https://media.istockphoto.com/id/515972508/es/foto/plaza-de-armas.jpg?s=612x612&w=0&k=20&c=G3WFkOR2nrVOKpDwpenPqUrp9_lFJFjJ6M6ItuPz79Q=', description: 'Cusco extrovertido', name: 'Cusco', cost: 1000, startDate: '2024-07-01', endDate: '2024-07-10', busName: 'Bus XYZ', busPlate: 'ABC-123', busLocation: 'Terminal Central', seatsAvailable: 20 },
    { image: 'https://elcomercio.pe/resizer/cwJfD7zYu2qtN76bk6s0eH9v-gA=/1200x900/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/JUTY3PKYF5DQPLDSGQHVY5OMT4.jpg', description: 'Lambayeque único', name: 'Lambayeque', cost: 1000, startDate: '2024-07-01', endDate: '2024-07-10', busName: 'Bus XYZ', busPlate: 'ABC-123', busLocation: 'Terminal Central', seatsAvailable: 20 },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN8k_-U-tK_v_o-uLxnZKUGFyQ6zzLCHWHgA&s', description: 'Junín deseable', name: 'Junin', cost: 1000, startDate: '2024-07-01', endDate: '2024-07-10', busName: 'Bus XYZ', busPlate: 'ABC-123', busLocation: 'Terminal Central', seatsAvailable: 20 },
    { image: 'https://www.xtravelperu.com/blog/wp-content/uploads/2023/06/puno-imagen-xtravel.jpg', description: 'Puno cálido', name: 'Puno', cost: 1000, startDate: '2024-07-01', endDate: '2024-07-10', busName: 'Bus XYZ', busPlate: 'ABC-123', busLocation: 'Terminal Central', seatsAvailable: 20 },
    { image: 'https://e.rpp-noticias.io/large/2014/08/01/1068979.jpg', description: 'Cascas inolvidable', name: 'Cascas', cost: 1000, startDate: '2024-07-01', endDate: '2024-07-10', busName: 'Bus XYZ', busPlate: 'ABC-123', busLocation: 'Terminal Central', seatsAvailable: 20 },
    { image: 'https://noticias-pe.laiglesiadejesucristo.org/media/960x540/Chimbote-2.jpg', description: 'Chimbote mágico', name: 'Chimbote', cost: 1000, startDate: '2024-07-01', endDate: '2024-07-10', busName: 'Bus XYZ', busPlate: 'ABC-123', busLocation: 'Terminal Central', seatsAvailable: 20 },// Otros viajes aquí
  ];


}
