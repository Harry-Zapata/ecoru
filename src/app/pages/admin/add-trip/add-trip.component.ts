import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrl: './add-trip.component.css'
})
export class AddTripComponent {

  form: FormGroup;

  logout() {
    throw new Error('Method not implemented.');
  }
  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      image: [''],
      name: [''],
      description: [''],
      cost: [''],
      fechaSalida: [''],
      startDate: [''],
      busLocation: [''],
      busName: [''],
      busPlate: [''],
      estado: [''],
      seatsAvailable: [''],
    })
  }

  files: File[] = [];

  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  addTrip() {
    let trips = localStorage.getItem('trips');
    if (trips) {
      let tripsArray = JSON.parse(trips);
      let lastId = tripsArray[tripsArray.length - 1].id;
      this.form.value.id = lastId + 1;
      tripsArray.push(this.form.value);
      localStorage.setItem('trips', JSON.stringify(tripsArray));
      console.log(tripsArray);
    }

    this.router.navigate(['/']);
  }



}
