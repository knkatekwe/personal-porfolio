import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MaintenanceService } from '../services/maintenance.service';

@Injectable()
export class MaintenanceGuard implements CanActivate {

  constructor(
    private authService: MaintenanceService, private router: Router
  ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.inMaintenance()) {
      this.router.navigate(['/maintenance']);
      return false;
    } else {
      this.router.navigate(['/']);
      return true;
    }
  }

}