import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestService } from '../rest.service';


@Component({
  selector: 'app-patient-editor',
  templateUrl: './patient-editor.component.html',
  styleUrls: ['./patient-editor.component.css']
})
export class PatientEditorComponent implements OnInit {
  patientForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    dNaissance: new FormControl(''),
    adresse: new FormControl(''),
    ville: new FormControl(''),
    tel: new FormControl(''),
  })
  
  patient: any;
  
  constructor(private service: RestService) { 
    service.getPatient().then(patient =>
      this.patient = patient );   
      
    }

  ngOnInit(): void {
  }

}
