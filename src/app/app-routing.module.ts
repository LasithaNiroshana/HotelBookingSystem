import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './pages/adminhome/adminhome/adminhome.component';
import { BookingsComponent } from './pages/adminhome/bookings/bookings/bookings.component';
import { DashboardComponent } from './pages/adminhome/dashboard/dashboard/dashboard.component';
import { PaymentsComponent } from './pages/adminhome/payments/payments/payments.component';
import { RoomsComponent } from './pages/adminhome/rooms/rooms/rooms.component';

const routes: Routes = [
  {path:'**',component:AdminhomeComponent},
  {path:'bookings',component:BookingsComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'payments',component:PaymentsComponent},
  {path:'rooms',component:RoomsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  AdminhomeComponent,
  BookingsComponent,
  DashboardComponent,
  PaymentsComponent,
  RoomsComponent
]
