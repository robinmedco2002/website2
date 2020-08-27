import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http:HttpClient) { }

  getData()  {
      // let url ="https://jsonplaceholder.typicode.com/todos";
      let url ="https://corona.lmao.ninja/v3/covid-19/countries";

      return this.http.get(url);
  }


}
