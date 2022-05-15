import { Component, OnInit } from '@angular/core';
import { CanonicalService } from 'src/app/core/services/cononical.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css'],
})
export class MaintenanceComponent implements OnInit {
  constructor(private canonicalService: CanonicalService) {}

  ngOnInit() {
    this.canonicalService.setCanonicalURL();
  }
}
