import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {

  medicationrequest: any;
  showPrescription: boolean;
  prescription: any;
  
  constructor(private service: RestService) { 
    service.getPrescription().then(medicationrequest =>
      this.medicationrequest = medicationrequest );
      this.showPrescription = false;
  }

  ngOnInit(): void {
  }

  show(p){
    this.prescription = p;
    this.showPrescription = true;
    
  }

}
