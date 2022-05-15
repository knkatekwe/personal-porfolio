import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MaintenanceService {
  constructor() {}

  inMaintenance() {
    return false;
  }
}
