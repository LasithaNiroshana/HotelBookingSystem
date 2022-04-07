import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './pages/adminhome/adminhome/adminhome.component';
import { BookingsComponent } from './pages/adminhome/bookings/bookings/bookings.component';
import { DashboardComponent } from './pages/adminhome/dashboard/dashboard/dashboard.component';
import { PaymentsComponent } from './pages/adminhome/payments/payments/payments.component';
import { RoomsComponent } from './pages/adminhome/rooms/rooms/rooms.component';
import { AdminloginComponent } from './pages/adminlogin/adminlogin.component';
import { SigninComponent } from './pages/adminlogin/signin/signin.component';
import { SignupComponent } from './pages/adminlogin/signup/signup.component';

const routes: Routes = [
  {path:'adminlogin',component:AdminloginComponent},
  {path:'adminhome',component:AdminhomeComponent,children:[
  {path:'bookings',component:BookingsComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'payments',component:PaymentsComponent},
  {path:'rooms',component:RoomsComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  AdminloginComponent,
  AdminhomeComponent,
  BookingsComponent,
  DashboardComponent,
  PaymentsComponent,
  RoomsComponent,
  SigninComponent,
  SignupComponent
]
