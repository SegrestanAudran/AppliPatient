import { Routes, RouterModule } from '@angular/router';

import { PatientComponent } from './patient/patient.component';
import { ObservationComponent } from './observation/observation.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { PatientEditorComponent } from './patient-editor/patient-editor.component';


const routes: Routes = [
    { path: 'patient', component: PatientComponent },
    { path: 'observation', component: ObservationComponent },
    { path: 'prescription', component: PrescriptionComponent },
    { path: 'patient/modifier', component: PatientEditorComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);