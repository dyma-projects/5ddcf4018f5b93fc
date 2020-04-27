import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   public users : BehaviorSubject<string[]> = new BehaviorSubject(["jean","paul"]);

  constructor() {
   }

  addUser(user : string) {
	const users = this.users.value.slice();
	users.push(user);
	this.users.next(users);
  }
}
