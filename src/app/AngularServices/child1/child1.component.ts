import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class Child1Component implements OnInit {

  @Input() sendName

  @Output() sendTOParent = new EventEmitter()
  
  constructor() { }

  ngOnInit() {
  }

  broadcastChange = function(){
    this.sendTOParent.emit(this.sendName)
  }
}
