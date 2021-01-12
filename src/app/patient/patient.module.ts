import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { NavigationMenuComponent } from '../user-management/navigation-menu/navigation-menu.component';
import { SharedModule } from '../common/module/shared/shared.module';


@NgModule({
  declarations: [
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
