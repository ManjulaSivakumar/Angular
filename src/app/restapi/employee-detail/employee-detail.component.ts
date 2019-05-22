import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RestapiService } from 'src/app/services/restapi.service';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  activeId:any
  activeEmployee: any

  constructor(private activeRoute:ActivatedRoute, private restapi:RestapiService) { }

  ngOnInit() {
    console.log(this.activeRoute)
    this.activeId=this.activeRoute.snapshot.params.id
    this.restapi.getEmployeeDetails(this.activeId).subscribe((response)=>{
    console.log(response)
    this.activeEmployee=response
    console.log(this.activeEmployee)
    },function(error){}) 
  }

}
