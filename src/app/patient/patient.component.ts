import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patient: any;
  //datepipe: any;
  
  constructor(private service: RestService, public datepipe: DatePipe) { 
    service.getPatient().then(patient =>
      this.patient = patient );   
      
    }


  ngOnInit(): void {
        
  }
  

}
