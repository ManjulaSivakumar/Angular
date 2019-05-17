import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuilt',
  templateUrl: './inbuilt.component.html',
  styleUrls: ['./inbuilt.component.css']
})
export class InbuiltComponent implements OnInit {
  money = 88
  name = 'chance-e-illiya'
  birthday = new Date()

  constructor() { }

  ngOnInit() {
  }

}
