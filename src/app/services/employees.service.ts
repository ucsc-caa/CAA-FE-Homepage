import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  employeesData: Object;

  constructor(private http: HttpClient) { }
  getEmployees() {
     this.http.get('src/app/services/employees.json')
      .subscribe(data => {
        console.log(data);
        this.employeesData = data;
      }); 
  }

}
