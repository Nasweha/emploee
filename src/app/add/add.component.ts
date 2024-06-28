import { Component } from '@angular/core';
import { EmpModel } from '../employee.model';
import { ApiService } from '../service/api.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  employeeDetails:EmpModel={}

  constructor(private api:ApiService ,private router:Router){}

  Cancel(){
    this.employeeDetails={}
  }

  addUser(){
    this.api.addEmployeeApi(this.employeeDetails).subscribe({
      next:(res:any)=>{
        console.log(res);
        Swal.fire({
          title:'wow',
          text:'user added succesfully',
          icon:'success'
        })
        this.router.navigateByUrl('/employee')
        
        
      },
      error:(err:any)=>{
        console.log(err);
        Swal.fire({
          title:'Oops',
          text:'something went wrong',
          icon:'error'
        })
        this.employeeDetails={}
        
      }

    })
  }
}
