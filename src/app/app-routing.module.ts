import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './common/helper/AuthGuard';
import { DashboardComponent } from './user-management/dashboard/dashboard.component';
import { HomeComponent } from './user-management/home/home.component';
import { LoginComponent } from './user-management/login/login.component';
import { LogoutComponent } from './user-management/logout/logout.component';
import { ResetPasswordComponent } from './user-management/reset-password/reset-password.component';
import { SignupComponent } from './user-management/signup/signup.component';
import { UserProfileComponent } from './user-management/user-profile/user-profile.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'index', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'resetpass', component: ResetPasswordComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard]},
  {path: 'patient', loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule), canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
