import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';


@Component({
  selector: 'app-consume1',
  templateUrl: './consume1.component.html',
  styleUrls: ['./consume1.component.css']
})
export class Consume1Component implements OnInit {

  constructor(private local:LocalService) { 
    console.log("1")
  }

  ngOnInit() {
    this.accessLocalService()
  }

  accessLocalService = function(){
    console.log(this.local.myPI)
    this.local.dsiplayBanks()
    this.local.addBank()
    this.local.displayBanks()
  }
}
