import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const GROUPE_API = 'http://localhost:8080/api/test/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class GroupeService {

  constructor(private http: HttpClient) { }
  getListOfGroupe() {
    return this.http.get(GROUPE_API + 'allGroupe', httpOptions);
  }
}
