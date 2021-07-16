import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employees } from '../Models/employees';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  numberofuniqueRoles :any[]=[];
  employees: Employees[] = [];
  searchText: string;
  constructor(private httpClient: HttpClient ,private fb: FormBuilder  ){}
 
  GetemployeesData(){
     this.httpClient.get("assets/employees.json").subscribe(data =>{
      this.employees = data as Array<Employees>;
      this.getNoofRoles(this.employees)
    })

   
  }
  ngOnInit(){
    this.GetemployeesData()

    //reactive form validation
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', [Validators.required]],
      role: ['', [Validators.required]],
    })
  }


  //getting form control
  get employeeFormControl() {
    return this.employeeForm.controls;
  }

  getNoofRoles(employees: Employees[]){
   this.numberofuniqueRoles=employees.map(item => item.role)
    .filter((value, index, self) => self.indexOf(value) === index)
  }



  deleteEmployee(index: number){
    this.employees.splice(index, 1);
  }

AddEmployee(employee: Employees){
    if (!this.employeeForm.valid) {
      alert('Form is invalid');
      
    }
    this.employees.push(employee);
}



// filter functionlity to filter file


  // openDialog(): void {
  //   let dialogRef = this.dialog.open(EmployeeAddComponent, {
  //     width: '250px',
     
  //   });
  
  //   dialogRef.afterClosed().subscribe(result => {
    
  //   });
  // }
}
