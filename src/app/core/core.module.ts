import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceService } from './services/maintenance.service';
import { CanonicalService } from './services/cononical.service';
import { ActivityLogService } from './services/activity-log.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
  providers: [MaintenanceService, CanonicalService, ActivityLogService],
})
export class CoreModule {}
