import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiTabComponent } from '../../component/utils/multi-tab/multi-tab.component';
import { SharedMaterialModule } from '../shared-material/shared-material.module';
import { NavigationMenuComponent } from 'src/app/user-management/navigation-menu/navigation-menu.component';


@NgModule({
  declarations: [
    MultiTabComponent,
    NavigationMenuComponent,

  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
  ],
  exports:[
    MultiTabComponent,
    NavigationMenuComponent,
    
  ]
})
export class SharedModule { }
