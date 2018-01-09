import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Profile } from '../profile';
import { UserService } from '../user.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() profile: Profile;

  // VARIABLES
  title = 'Profile';
  intro = 'Edit your current profile.';

  constructor(
      private route: ActivatedRoute,
      private userService: UserService,
      private location: Location,
      private _sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
      this.getProfile();
  }

  getProfile(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.userService.getProfile(id)
          .subscribe(profile => this.profile = profile);
  }

}
