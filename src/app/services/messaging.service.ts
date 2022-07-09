import { Injectable } from '@angular/core';
import { AngularFireMessaging } from "@angular/fire/compat/messaging";
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  currentMessage = new BehaviorSubject(null);

  constructor(private angularFireMessaging: AngularFireMessaging) {

  }

  requestPermission() {
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        console.log(token);
      });
  }

  receiveMessage() {
    this.angularFireMessaging.messages.subscribe(
      (msg: any) => {
        console.log("show message!", msg);
        this.currentMessage.next(msg);
      })
  }
}
