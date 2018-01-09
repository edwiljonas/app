import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // VARIABLES
  title = 'LeagueFind';
  intro = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum tortor at nisi.';

  constructor() { }

  ngOnInit() {
  }

}
