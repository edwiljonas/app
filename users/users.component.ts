import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // VARIABLES
  title = 'Find a Friend';
  intro = 'Current users online looking for a duo partner.';

  constructor() { }

  ngOnInit() {
  }

}
