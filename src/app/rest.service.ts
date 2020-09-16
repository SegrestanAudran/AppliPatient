import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patient, Observation, Medecin, MedicationOrder } from '../fhirdata';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  server = "https://fhir.eole-consulting.io/api/";

  constructor(private http: HttpClient) { }


 

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getPatient(): Promise<any> {
    return this.http.get(this.server + "patient/12345", {
    })
      .toPromise().then(response => response)
      .catch(this.handleError);
  };

  putPatient(patient:any): Promise<any> {
    return this.http.put(this.server + "patient/12345",patient, {
    })
    .toPromise().then(response => response)
    .catch(this.handleError);
  }
  getPractitioner(): Promise<any> {
    return this.http.get(this.server + "practitioner/f333", {
    })
      .toPromise().then(response => response)
      .catch(this.handleError);
  };

  getPrescription(): Promise<any> {
    return this.http.get(this.server + "medication-request?subject.reference=Patient/12345", { /*?requester.identifier=f333*/
    })
      .toPromise().then(response => response)
      .catch(this.handleError);
  };

  postObservation(observation : any): Promise<any> {
    return this.http.post(this.server + "observation", observation,{
      headers : {'Content-Type': 'application/json'}
    })
      .toPromise().then(response => response)
      .catch(this.handleError);
  };

  getObservation(observation : any): Promise<any> {
    return this.http.get(this.server + "observation/f001", {
    })
      .toPromise().then(response => response)
      .catch(this.handleError);
  };

  
}
