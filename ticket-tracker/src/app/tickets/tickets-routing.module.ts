import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketPageComponent } from './ticket-page/ticket-page.component';

const routes: Routes = [
  {
    path: 'ticket', component: TicketPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
