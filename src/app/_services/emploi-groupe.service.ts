import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Seance } from '../_classes/seance';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

const API = 'http://localhost:8080/api/test/emploi/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
export class Appointment {
    text: string;
    roomId: number;
    startDate: Date;
    endDate: Date;
}

export class Resource {
    text: string;
    id: number;
    color: string;
}
@Injectable()
export class Service {
  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) { }
  getListOfSeances(id: number): Observable<Seance[]>{
    return this.http.get<Seance[]>(API + id, httpOptions)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
