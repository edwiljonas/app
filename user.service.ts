import { Injectable } from '@angular/core';
import { User } from './users';
import { Profile } from './profile';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { USERS } from './data.users';
import { PROFILES } from './data.profile';

@Injectable()
export class UserService {

  constructor() { }

  getUsers(): User[] {
      return USERS;
  }

  getUser(id: number): Observable<User> {
      // RETURN DATA FOR USER SELECTED
      return of(USERS.find(user => user.id === id));
  }

  getProfile(id: number): Observable<Profile> {
        // RETURN DATA FOR USER SELECTED
      return of(PROFILES.find(profile => profile.id === id));
  }

}
