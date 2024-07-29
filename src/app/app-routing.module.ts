import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/usuario/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { HeaderComponent } from './core/header/header.component';
import { TripDetailsComponent } from './pages/usuario/trip-details/trip-details.component';
import { ListTripComponent } from './pages/admin/list-trip/list-trip.component';
import { AddTripComponent } from './pages/admin/add-trip/add-trip.component';
import { EditTripComponent } from './pages/admin/edit-trip/edit-trip.component';
import { ReservationLimitComponent } from './pages/admin/reservation-limit/reservation-limit.component';
import { PaymentComponent } from './pages/usuario/payment/payment.component';
import { ProfileComponent } from './pages/usuario/profile/profile.component';
import { AdminDashComponent } from './pages/admin/admin-dash/admin-dash.component';
import { NotifyComponent } from './pages/admin/notify/notify.component';
import { ReservationManagementComponent } from './pages/admin/reservation-management/reservation-management.component';
import { TravelHistoryComponent } from './pages/usuario/travel-history/travel-history.component';
import { BoletaComponent } from './pages/usuario/boleta/boleta.component';

const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' }, //verificar estosw
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'trip-details', component: TripDetailsComponent },
  { path: 'header', component: HeaderComponent },
  {path: 'list', component: ListTripComponent},
  { path: 'add', component: AddTripComponent},
  { path: 'edit', component: EditTripComponent},
  {path : 'reservations', component: ReservationLimitComponent},
  {path : 'payment', component: PaymentComponent},
  { path :'profile', component: ProfileComponent},
  { path : 'dash', component: AdminDashComponent},
  {path: 'boleta/:id', component: BoletaComponent},
  {path : 'notify', component: NotifyComponent},
  { path :'history', component: TravelHistoryComponent}, //user
  { path : 'manage', component: ReservationManagementComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//Configura las rutas en app-routing.module.ts para que 
//cada página sea accesible mediante una URL específica: