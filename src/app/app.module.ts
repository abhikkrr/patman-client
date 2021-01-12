import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './user-management/login/login.component';
import { SignupComponent } from './user-management/signup/signup.component';
import { DashboardComponent } from './user-management/dashboard/dashboard.component';
import { HomeComponent } from './user-management/home/home.component';
import { ResetPasswordComponent } from './user-management/reset-password/reset-password.component';
import { LogoutComponent } from './user-management/logout/logout.component';
// import { NavigationMenuComponent } from './user-management/navigation-menu/navigation-menu.component';
import { UserProfileComponent } from './user-management/user-profile/user-profile.component';
import { MenuBarComponent } from './user-management/menu-bar/menu-bar.component';
import { BannerComponent } from './common/component/banner/banner.component';
import { FooterComponent } from './common/component/footer/footer.component';
import { SharedModule } from './common/module/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PathologyComponent } from './pathology/pathology.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    HomeComponent,
    ResetPasswordComponent,
    LogoutComponent,
    // NavigationMenuComponent,
    UserProfileComponent,
    MenuBarComponent,
    BannerComponent,
    FooterComponent,
    PatientComponent,
    DoctorComponent,
    PathologyComponent,
    ReportsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
