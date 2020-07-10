import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class SeanceService {
  public  host:any = "http://localhost:8080/api/test/";
  constructor(private http: HttpClient) { }


  getListOfSeance() {
    return this.http.get(this.host + 'allSeance', httpOptions);
  }
  saveSeance(url,data){
    return this.http.post(url,data)
  }
  DeleteSeance(url){
    return this.http.delete(url)
  }
}
