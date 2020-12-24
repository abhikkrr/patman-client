import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiTabComponent } from '../../component/utils/multi-tab/multi-tab.component';
import { SharedMaterialModule } from '../shared-material/shared-material.module';


@NgModule({
  declarations: [
    MultiTabComponent,
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
  ],
  exports:[
    MultiTabComponent,
  ]
})
export class SharedModule { }
