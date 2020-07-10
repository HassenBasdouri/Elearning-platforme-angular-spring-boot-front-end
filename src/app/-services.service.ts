import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

 
  public  host:any = "http://localhost:8080/api/test/";
  constructor(private http: HttpClient) {

   }
  getListOfEns() {
    return this.http.get(this.host + 'allEnseignant', httpOptions);
  }
}
