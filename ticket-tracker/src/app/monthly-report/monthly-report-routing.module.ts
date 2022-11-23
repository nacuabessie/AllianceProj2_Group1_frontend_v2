import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonthlyReportPageComponent } from './monthly-report-page/monthly-report-page.component';

const routes: Routes = [
  {
    path: 'monthly-report', component: MonthlyReportPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonthlyReportRoutingModule { }
