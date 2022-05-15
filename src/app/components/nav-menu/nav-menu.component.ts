import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
})
export class NavMenuComponent implements OnInit {
  isActive: boolean;

  constructor() {}

  ngOnInit() {
    this.isActive = false;
  }

  toggleMenu() {
    console.log('Menu toggled...');
    this.activeMobile();
  }

  activeMobile() {
    this.isActive = !this.isActive;
    console.log(`Mobile menu toggled...${this.isActive}`);
  }
}
