import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav/nav.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login.component';
import { ReportcrimeComponent } from './reportcrime/reportcrime.component';
import { StationComponent } from './station/station.component';
import { EmergencyformComponent } from './emergencyform/emergencyform.component';
import { FIRFormComponent } from './firform/firform.component';
import { ChkstatusComponent } from './chkstatus/chkstatus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Imports
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule, MatSelectModule } from '@angular/material';
import { MatButtonModule, MatInputModule, MatRippleModule } from '@angular/material';
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from '@angular/material/table';
import { CrimedatabaseComponent } from './crimedatabase/crimedatabase.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
//import { MaterialModule } from 'src/app/et-shared/material.module';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    ReportcrimeComponent,
    StationComponent,
    EmergencyformComponent,
    FIRFormComponent,
    ChkstatusComponent,
    CrimedatabaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatIconModule,
    MatTableModule,
    MatProgressBarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
