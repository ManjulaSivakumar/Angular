import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consumeparent',
  templateUrl: './consumeparent.component.html',
  styleUrls: ['./consumeparent.component.css']
})
export class ConsumeparentComponent implements OnInit {
  
  name = 'Angular 7'
  constructor() { }

  ngOnInit() {
  }

  recievedname = function(e){
    this.name= e
  }

}
