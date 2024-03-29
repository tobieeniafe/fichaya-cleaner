import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { JwtModule } from '@auth0/angular-jwt';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ValidatorService } from './services/validator.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/authguard.service';
import { RouteGuardService } from './services/routeguard.service';
import { LoginComponent } from './login/login.component';
import { BookingComponent } from './booking/booking.component';
import { AccountComponent } from './account/account.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RegisterService } from './register/register.service';
import { PaymentsComponent } from './payments/payments.component';


const routes: Routes = [
  { path: '', redirectTo: 'cleaner/login', pathMatch: 'full' },
  { path: 'cleaner/login',  component: LoginComponent, canActivate: [RouteGuardService] },
  { path: 'cleaner/register',  component: RegisterComponent, canActivate: [RouteGuardService] },
  { path: 'cleaner/dashboard',  component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'cleaner/booking',  component: BookingComponent, canActivate: [AuthGuardService] },
  { path: 'cleaner/account',  component: AccountComponent, canActivate: [AuthGuardService] },
  { path: 'cleaner/payments',  component: PaymentsComponent, canActivate: [AuthGuardService] },
  { path: '**', component: LoginComponent  }
];

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    BookingComponent,
    AccountComponent,
    RegisterComponent,
    DashboardComponent,
    SidebarComponent,
    PaymentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(routes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })
  ],
  providers: [ValidatorService, AuthService, AuthGuardService, RouteGuardService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
