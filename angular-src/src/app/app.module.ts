import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { ImageUploadModule } from 'angular2-image-upload';


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


const routes: Routes = [
  { path: '', redirectTo: 'cleaner/login', pathMatch: 'full' },
  { path: 'cleaner/login',  component: LoginComponent, canActivate: [RouteGuardService] },
  { path: 'cleaner/register',  component: RegisterComponent, canActivate: [RouteGuardService] },
  { path: 'cleaner/dashboard',  component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'cleaner/booking',  component: BookingComponent, canActivate: [AuthGuardService] },
  { path: 'cleaner/account',  component: AccountComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    BookingComponent,
    AccountComponent,
    RegisterComponent,
    DashboardComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(routes),
    ImageUploadModule.forRoot()
  ],
  providers: [ValidatorService, AuthService, AuthGuardService, RouteGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
