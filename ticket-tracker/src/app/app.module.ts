import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ManagementModule } from './management/management.module';
import { MonthlyReportModule } from './monthly-report/monthly-report.module';
import { TicketsModule } from './tickets/tickets.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';

import { LoginComponent } from './login/login-page/login-page.component';
//import { UsersService } from './../services/users/users.service';
//import { HotToastService } from '@ngneat/hot-toast';
import { HotToastModule } from '@ngneat/hot-toast';
import { ForgotComponent } from './forgetpass/forgetpass.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ForgotComponent,
    //LoginPageComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  imports: [
    //LoginModule,
    BrowserModule,
    AppRoutingModule,
    TicketsModule,
    ManagementModule,
    MonthlyReportModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    HotToastModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
