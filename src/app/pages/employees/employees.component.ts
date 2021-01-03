import { Component, OnInit } from '@angular/core';
import { EmployeesService} from '../../services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  empData: any;

  constructor(private EmployeesService: EmployeesService) { }

  ngOnInit(): void {
    this.empData = this.EmployeesService.getEmployees();
  }

}
