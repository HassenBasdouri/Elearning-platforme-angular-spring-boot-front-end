import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { constants } from 'buffer';






const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class GroupeService {

  public  host:any = "http://localhost:8080/api/test/";
  constructor(private http: HttpClient) {

   }
  getListOfGroupe() {
    return this.http.get(this.host + 'allGroupe', httpOptions);
  }
  saveGroupes(url,data){
    return this.http.post(url,data)
  }
  DeleteGroupe(url){
    return this.http.delete(url)
  }
}
