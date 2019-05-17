import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-consume2',
  templateUrl: './consume2.component.html',
  styleUrls: ['./consume2.component.css']
})
export class Consume2Component implements OnInit {

  constructor(private local:LocalService) { }

  ngOnInit() {
      }


}
