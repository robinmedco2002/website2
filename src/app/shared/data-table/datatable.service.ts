import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';

import { User } from 'src/app/shared/data-table/user.model'



@Injectable({
  providedIn: 'root'
})
export class DatatableService {

  private serviceUrl = 'https://corona.lmao.ninja/v3/covid-19/countries';
  paginator: any;
  
  constructor(private http: HttpClient) { }
  
  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.serviceUrl);
  }
  
}