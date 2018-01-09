import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../users';
import { UserService } from '../user.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() user: User;

  // VARIABLES
  title = 'DoctaG';
  played = 'Most Played Champions';
  history = 'Match History';
  intro = 'Current users profile.';

  constructor(
      private route: ActivatedRoute,
      private userService: UserService,
      private location: Location,
      private _sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
      this.getUser();
  }

  // SANITIZE THE IMAGE UR
  sanImage(image) {
      return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

  getUser(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.userService.getUser(id)
          .subscribe(user => this.user = user);
  }

}
