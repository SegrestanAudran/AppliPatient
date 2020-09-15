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
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientEditorComponent } from './patient-editor/patient-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    ObservationComponent,
    PrescriptionComponent,
    PatientEditorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    appRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [RestService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
