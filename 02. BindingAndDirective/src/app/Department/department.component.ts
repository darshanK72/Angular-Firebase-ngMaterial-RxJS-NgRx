import { Component, OnInit } from '@angular/core';
import { Department } from '../Models/department';
import { DepartmentService } from '../Services/departmet.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit{

  departments : Department[] = [];

  constructor(private departmentService : DepartmentService){}

  ngOnInit(): void {
    this.departmentService.getAllDepartments().subscribe(departments => {
      this.departments = departments;
    });

  }

  

  
  

}
