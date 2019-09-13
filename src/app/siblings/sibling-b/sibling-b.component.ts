import { Component, OnInit } from '@angular/core';
import { SiblingCommService, SiblingMessage } from '../sibling-comm.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sibling-b',
  templateUrl: './sibling-b.component.html',
  styleUrls: ['./sibling-b.component.scss']
})
export class SiblingBComponent implements OnInit {

  message = '';
  recievedMessege = '';
  code = 'B';
  constructor(private siblingCommService: SiblingCommService) { }

  ngOnInit() {
    this.recieveMessages();
  }

  sendMessage() {
    this.siblingCommService.set({ reciever: 'A', message: this.message });
  }

  recieveMessages() {
    this.siblingCommService.get()
      .pipe(filter((msg: SiblingMessage) => msg.reciever === this.code))
      .subscribe((message: SiblingMessage) => this.recievedMessege = message.message);
  }
}
