import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {RestService} from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appliPatient';
  patient: any;
  constructor(private service: RestService) { 
    this.patient = service.getPatient();
  }
}
