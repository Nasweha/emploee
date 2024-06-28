import {HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   serverUrl = 'http://localhost:3000'

   //1)creeate object for behavour subject
   sharedata = new BehaviorSubject(false)


  constructor(private http:HttpClient) { }

    updaetData(data:any){
      this.sharedata.next(data)
    }
  


//api to login
  loginApi(){
   return this.http.get(`${this.serverUrl}/employee/1`)
  }

//api to add employee
  addEmployeeApi(reqBody:any){
    return this.http.post(`${this.serverUrl}/employee`,reqBody)
  }

  
  //api to get all employee details
   getAllEmployeeDetails(){
    return this.http.get(`${this.serverUrl}/employee`)
   }


   //api to delete employee
deleteEmployeeApi(id:string){
  return this.http.delete(`${this.serverUrl}/employee/${id}`)
}

getAEmployee(id:any){
  return this.http.get(`${this.serverUrl}/employee/${id}`)
}

//update the employee details
updateEmpDetailsApi(id:any,body:any){
  return this.http.put(`${this.serverUrl}/employee/${id}`,body)


}

//api to update admin details
 updateAdminDetailsApi(body:any){
  return this.http.put(`${this.serverUrl}/employee/1`,body)
 }

}
