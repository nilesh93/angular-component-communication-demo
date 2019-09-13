
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface SiblingMessage {
    reciever: string;
    message: string;
}

@Injectable()
export class SiblingCommService {

    public subject = new Subject();
    constructor() { }

    set(message: SiblingMessage) {
        this.subject.next(message);
    }
    get(): Observable<any> {
        return this.subject.asObservable();
    }
}
