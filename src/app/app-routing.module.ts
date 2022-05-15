import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintenanceGuard } from './core/guards/maintenance-guard.service';

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent }, //canActivate: [MaintenanceGuard]
  { path: 'maintenance', component: MaintenanceComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy', initialNavigation: 'enabledBlocking' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
