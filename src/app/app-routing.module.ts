import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login.component';
import { ReportcrimeComponent } from './reportcrime/reportcrime.component';
import { StationComponent } from './station/station.component';
import { EmergencyformComponent } from './emergencyform/emergencyform.component';
import { FIRFormComponent } from './firform/firform.component';
import { ChkstatusComponent } from './chkstatus/chkstatus.component';
import { CrimedatabaseComponent } from './crimedatabase/crimedatabase.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'ReportACrime', component: ReportcrimeComponent},
  {path: 'KnowStation', component: StationComponent},
  {path: 'emergencyForm', component: EmergencyformComponent},
  {path: 'firform', component: FIRFormComponent},
  {path: 'chkstatus', component: ChkstatusComponent},
  {path: 'crimedatabase', component: CrimedatabaseComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
