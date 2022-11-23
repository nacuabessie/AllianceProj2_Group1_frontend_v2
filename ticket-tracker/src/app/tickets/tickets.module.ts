import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketPageComponent } from './ticket-page/ticket-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TicketPageComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    ReactiveFormsModule
  ],

  exports:[
    TicketPageComponent
  ]
})
export class TicketsModule { }