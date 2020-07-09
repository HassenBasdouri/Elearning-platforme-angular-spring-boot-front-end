import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
const host = 'http://localhost:8080/api/test/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class SalleService {
  public  host:any = "http://localhost:8080/api/test/";
  constructor(private http: HttpClient) { }
  getListOfSalle() {
    return this.http.get(host + 'allSalle', httpOptions);
  }

  saveSalles(url,data){
    return this.http.post(url,data)
  }

}
