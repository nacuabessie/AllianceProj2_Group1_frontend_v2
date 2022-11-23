import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonthlyReportRoutingModule } from './monthly-report-routing.module';
import { MonthlyReportPageComponent } from './monthly-report-page/monthly-report-page.component';


@NgModule({
  declarations: [
    MonthlyReportPageComponent
  ],
  imports: [
    CommonModule,
    MonthlyReportRoutingModule
  ],
  exports:[
    MonthlyReportPageComponent
  ]
})
export class MonthlyReportModule { }
