import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientComponent } from './patient/patient.component';
import { ObservationComponent } from './observation/observation.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { appRoutingModule } from './app.routing';
import { RestService } from './rest.service';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    ObservationComponent,
    PrescriptionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    appRoutingModule,
    HttpClientModule,
    MatGridListModule,
    MatMenuModule,
    MatListModule//,
    //NgbModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
