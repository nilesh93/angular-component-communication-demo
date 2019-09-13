import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.scss']
})
export class ParentChildComponent implements OnInit {

  textBoxValue = '';
  textBoxValueFromChild = '';

  constructor() { }

  ngOnInit() {
  }

  updateTextBoxValueFromChild(str: string) {
    this.textBoxValueFromChild = str;
  }

}
