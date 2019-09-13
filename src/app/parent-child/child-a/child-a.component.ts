import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.scss']
})
export class ChildAComponent implements OnInit {

  @Input() textBoxValueFromParent = '';

  textBoxValue = '';
  @Output() textBoxValueEmitter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  textBoxChange() {
    this.textBoxValueEmitter.emit(this.textBoxValue);
  }


  public helloAngularAlert() {
    alert('Hello ng Sri Lanka!');
  }
}
