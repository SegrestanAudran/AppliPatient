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

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    ObservationComponent,
    PrescriptionComponent,
    HttpClientModule
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    appRoutingModule,
    RestService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
