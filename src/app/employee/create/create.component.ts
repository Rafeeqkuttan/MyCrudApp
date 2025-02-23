import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  formdata: Employee = {
    id: 0,
    name: '',
    education: '',
    age: 25,
    job: ''
  };

  constructor(private employeeService: EmployeeService, private router: Router) { }

  create() {
    this.employeeService.create(this.formdata).subscribe({
      next: (data) => {
        this.router.navigate(["employee/home"]);
      },
      error: (er) => {
        console.log(er);

      }
    });
  }
}
