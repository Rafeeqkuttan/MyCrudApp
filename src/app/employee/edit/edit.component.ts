import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute

  ) { }


  formdata: Employee = {
    id: 0,
    name: '',
    education: '',
    age: 0,
    job: ''
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      let id = Number(param.get('id'))
      this.getByid(id)
    })
  }

  getByid(id: number) {
    this.employeeService.edit(id).subscribe((data) => {
      this.formdata = data;
    })


  }

  update() {
    this.employeeService.update(this.formdata).subscribe({
      next: (data) => {
        this.router.navigate(["employee/home"]);
      },
      error: (er) => {
        console.log(er);

      }
    });
  }
}
