import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  mailId:string=""
  pswd:string=""

  constructor(private api:ApiService ,private router:Router){}


  login(){
    if(!this.mailId || !this.pswd){
      Swal.fire({
        title:'info',
        text:'please fill the form completely',
        icon:'warning'
      })
    }
    else{
      this.api.loginApi().subscribe({
        next :(res:any)=>{
          // console.log('inside the NEXT function');
          // console.log(res);
          const {Email,password}= res
          if(Email==this.mailId &&password==this.pswd){
            Swal.fire({
              title:'wow',
              text:'please fill the form completely',
              icon:'success'
            })
            this.api.updaetData(true)
            this.router.navigateByUrl('/dashboard')
            
          }
          else{
            Swal.fire({
              title:'Oops',
              text:'please fill the form completely',
              icon:'error'
            })
          }
          
          
        },
        error :(err:any)=>{
          // console.log('inside error function');
          console.log(err);
          
          
        }
      })

    }
  }

}
