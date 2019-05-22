import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/services/restapi.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';

@Component({
selector: 'app-remote',
templateUrl: './remote.component.html',
styleUrls: ['./remote.component.css']
})
export class RemoteComponent implements OnInit {
  newemployeeform:FormGroup
users:any
employees:any
friends:["abcd","boad"]
constructor(private restapi:RestapiService, private myrouter:Router) { }

ngOnInit() {
//this.getAllUsers()
this.getAllEmployees()

this.newemployeeform = new FormGroup({
  id: new FormControl(),
  name: new FormControl(),
  age: new FormControl(),
  salary: new FormControl()
})
}

deleteEmployee = function(id){
  this.restapi.deleteEmployeeDetailbyId(id).subscribe((response)=>{
    console.log(response)
    this.message= response.success.text
    console.log(this.message)
    this.getAllEmployees()
  })
}

getAllUsers()
{
  this.restapi.getRemoteUsers().subscribe((response)=>{
  console.log(response)
  this.users=response
  console.log(this.users)
},function(error){})
}
getAllEmployees()
{
  this.restapi.getRemoteEmployees().subscribe((response)=>{
  console.log(response)
  this.employees=response
  console.log(this.employees)
},function(error){})
}

getEmployeeDetails = function(id){
  console.log(id)
  //navigate to route/ remote/3788
  //navigate to route  /remote/3877//id id dynamic
  this.myrouter.navigate(["/remote", id])
}


addEmployee = function(){
  this.employee={
    "name" : "abcH",
    "salary" : "72692",
    "age" : "23"
  } 
 this.restapi.addEmployee(this.employee).subscribe((response)=>{
   console.log(response)
   this.getAllEmployees()
 })}

 addnewEmployee = function(myform){
   console.log(myform.value)
  this.employee=myform.value

  this.restapi.addEmployee(this.employee).subscribe((response)=>{
    console.log(response)
    this.getAllEmployees()
  })
 }

 

}