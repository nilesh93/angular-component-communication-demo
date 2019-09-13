import { Component, OnInit } from '@angular/core';
import { SiblingCommService, SiblingMessage } from '../sibling-comm.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sibling-a',
  templateUrl: './sibling-a.component.html',
  styleUrls: ['./sibling-a.component.scss']
})
export class SiblingAComponent implements OnInit {

  message = '';
  recievedMessege = '';
  code = 'A';
  constructor(private siblingCommService: SiblingCommService) { }

  ngOnInit() {
    this.recieveMessages();
  }

  sendMessage() {
    this.siblingCommService.set({ reciever: 'B', message: this.message });
  }

  recieveMessages() {
    this.siblingCommService.get()
      .pipe(filter((msg: SiblingMessage) => msg.reciever === this.code))
      .subscribe((message: SiblingMessage) => this.recievedMessege = message.message);
  }
}
