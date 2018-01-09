import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // VARIABLES
  title = 'Dashboard';
  intro = 'Advanced settings for the legend in yourself.';
  soon = 'Dashboard coming soon!';

  constructor() { }

  ngOnInit() {
  }

}
