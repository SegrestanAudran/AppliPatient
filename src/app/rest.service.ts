import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patient, Observation, Medecin, MedicationOrder } from '../fhirdata';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  server = "https://fhir.eole-consulting.io/api/";
  patient=""

  constructor(private http: HttpClient) { }


  //Fonction de set du Header
  private setHeaders(user: string): HttpHeaders {
    var headers = new HttpHeaders({ 'X-User': user});

    return headers;
  }

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
}
