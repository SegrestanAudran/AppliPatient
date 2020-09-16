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
  constructor(private service: RestService) {
    service.getPatient().then(patient =>
      this.patient = patient);
    service.getPractitioner().then(practicien =>
      this.practicien = practicien);
  }

  ngOnInit() {
  }

  taux = 0;
  onKey(event: any) {
    this.taux = event.target.value;
  }

  onSend() {

    this.observation = {
      "text": {
        "status": "generated"
      },
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
        "id": "12345"
      },
      "issued": "2013-04-03T15:30:10+01:00",
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
}
