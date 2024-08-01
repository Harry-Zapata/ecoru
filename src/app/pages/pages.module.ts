import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelHistoryComponent } from './usuario/travel-history/travel-history.component';
import { TripDetailsComponent } from './usuario/trip-details/trip-details.component';
import { HomeComponent } from './usuario/home/home.component';
import { PaymentComponent } from './usuario/payment/payment.component';
import { ProfileComponent } from './usuario/profile/profile.component';
import { AddTripComponent } from './admin/add-trip/add-trip.component';
import { AdminDashComponent } from './admin/admin-dash/admin-dash.component';
import { EditTripComponent } from './admin/edit-trip/edit-trip.component';
import { ListTripComponent } from './admin/list-trip/list-trip.component';
import { NotifyComponent } from './admin/notify/notify.component';
import { ReservationLimitComponent } from './admin/reservation-limit/reservation-limit.component';
import { ReservationManagementComponent } from './admin/reservation-management/reservation-management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { BoletaComponent } from './usuario/boleta/boleta.component';
import { CreateAdminComponent } from './admin/create-admin/create-admin.component';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  declarations: [
    HomeComponent,
    PaymentComponent,
    ProfileComponent,
    TripDetailsComponent,
    TravelHistoryComponent,//users
    AddTripComponent,
    ListTripComponent,
    EditTripComponent,
    ReservationLimitComponent,
    NotifyComponent,
    ReservationManagementComponent,
    AdminDashComponent,
    CreateAdminComponent,
    BoletaComponent
  ],
  imports: [
    CommonModule, 
    RouterModule, 
    FormsModule, 
    CoreModule,
    ReactiveFormsModule,
    NgxDropzoneModule
  ], 
  exports: [
    HomeComponent,
    PaymentComponent,
    ProfileComponent,
    BoletaComponent,
    TripDetailsComponent,
    CreateAdminComponent,
    TravelHistoryComponent]
})
export class PagesModule { }
