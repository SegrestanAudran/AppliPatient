import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {

  medicationrequest: any;
  
  constructor(private service: RestService) { 
    service.getPrescription().then(medicationrequest =>
      this.medicationrequest = medicationrequest );
  }

  ngOnInit(): void {
  }

}
