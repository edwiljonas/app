import { Component, OnInit } from '@angular/core';
import { OTHERS } from '../data.other';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  users = OTHERS;

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  // SANITIZE THE IMAGE URL
  sanImage(image) {
      return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

}
