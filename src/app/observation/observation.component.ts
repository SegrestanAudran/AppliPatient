import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-observation',
  templateUrl: './observation.component.html',
  styleUrls: ['./observation.component.css']
})

export class ObservationComponent implements OnInit {
  patient: any;
  practicien: any;
  observation: any;
  date : any;
  showPracticien: boolean;
  practicienActif: any;
  envoie: boolean;

  
  constructor(private service: RestService) {
    service.getPatient().then(patient =>
      this.patient = patient);
    
    service.getPractitioner().then(practicien =>
      this.practicien = practicien);
    this.showPracticien = false;
    this.envoie = false;
  }

  ngOnInit() {
  }

  taux = 0;
  onKey(event: any) {
    this.taux = parseInt(event.target.value);
  }

  onSend() {
    //let time = "2021-11-09 11:43:00";
    this.envoie = true;
    setTimeout(() => {
      this.envoie = false;
    }, 5000);
    var date = new Date();
    this.observation = {
      "resourceType": "Observation",
      "identifier": [
        {
          "use": "official",
          "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
          "value": "6323"
        }
      ],
      "status": "final",
      "code": {
        "coding": [
          {
            "system": "http://loinc.org",
            "code": "15074-8",
            "display": "Glucose [Moles/volume] in Blood"
          }
        ]
      },
      "subject": {
        "reference": "Patient/12345"
      },
      "issued":  date,//time
      "valueQuantity": {
        "value": this.taux,
        "unit": "mmol/l",
        "system": "http://unitsofmeasure.org",
        "code": "mmol/L"
      },
      "interpretation": {},
      "referenceRange": [
        {
          "low": {
            "value": 3.1,
            "unit": "mmol/l",
            "system": "http://unitsofmeasure.org",
            "code": "mmol/L"
          },
          "high": {
            "value": 6.2,
            "unit": "mmol/l",
            "system": "http://unitsofmeasure.org",
            "code": "mmol/L"
          }
        }
      ]
    }
    console.log(this.observation);
    this.service.postObservation(this.observation).then(data => { console.log(data); });
  }

  show(p){
    this.practicienActif = p;
    this.showPracticien = true;
  }
}
