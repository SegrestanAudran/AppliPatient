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
    MatMenuModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
