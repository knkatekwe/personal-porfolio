import { Component, OnInit } from '@angular/core';
import personalDetail from '../../core/data/personal-detail.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  start: boolean = false;

  personalDetail = personalDetail;

  constructor() {}

  ngOnInit() {
    // Start after 1 second + 1 second of startDelay
    setTimeout(() => (this.start = true), 1000);
  }
}
