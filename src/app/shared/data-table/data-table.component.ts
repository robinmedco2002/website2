import { Component, OnInit } from '@angular/core';
import {  DatatableService } from 'src/app/shared/data-table/datatable.service'

import { Observable, of } from 'rxjs';

import { DataSource } from '@angular/cdk/collections';
import { User} from 'src/app/shared/data-table/user.model';




@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})



export class DataTableComponent implements OnInit {

  dataSource = new UserDataSource(this.userService);
  displayedColumns = ['S No', 'country', 'case', 'todayCases', 'deaths', 'todayDeaths', 'recovered', 'active', 'critical', 'casesPerOneMillion', 'deathsPerOneMillion', 'tests', 'testsPerOneMillion'];
  constructor(private userService: DatatableService) { }
  

  ngOnInit(): void {
  }

}

export class UserDataSource extends DataSource<any> {
  constructor(private userService: DatatableService) {
    super();
  }
  connect(): Observable<User[]> {
    return this.userService.getUser();
  }
  disconnect() {}
}