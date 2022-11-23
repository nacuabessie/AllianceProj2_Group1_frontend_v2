import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { ManagementPageComponent } from './management-page/management-page.component';


@NgModule({
  declarations: [
    ManagementPageComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule
  ],
  exports:[
    ManagementPageComponent
  ]
})
export class ManagementModule { }
