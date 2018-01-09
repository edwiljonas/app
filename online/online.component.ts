import { Component, OnInit } from '@angular/core';
import { USERS } from '../data.users';
import { UserService } from '../user.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.css']
})
export class OnlineComponent implements OnInit {

  // VARIABLES
  title = 'Friends Online';
  users = USERS;

  constructor( private _sanitizer: DomSanitizer , private userService: UserService ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
      this.users = this.userService.getUsers();
  }

  // SANITIZE THE IMAGE UR
  sanImage(image) {
      return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

}
