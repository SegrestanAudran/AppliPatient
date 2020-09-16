import { Component } from '@angular/core';
import {RestService} from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appliPatient';
  patient: any;
  showEasteregg: boolean;
  constructor(private service: RestService) { 
    service.getPatient().then(patient =>
      this.patient = patient );
      this.showEasteregg = false;
  }

  show(){
    this.showEasteregg = true;
    setTimeout(() => {
      this.showEasteregg = false;
    }, 1000);
  }
}
