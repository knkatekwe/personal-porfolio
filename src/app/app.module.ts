import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceGuard } from './core/guards/maintenance-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResumeComponent } from './components/resume/resume.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';
import { SingleProjectComponent } from './components/projects/single-project/single-project.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';

import { AppRoutingModule } from './app-routing.module';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { NgxWhastappButtonModule } from 'ngx-whatsapp-button';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroductionComponent,
    ProjectsComponent,
    FooterComponent,
    ResumeComponent,
    NavMenuComponent,
    TestimonialsComponent,
    ContactComponent,
    SingleProjectComponent,
    LandingPageComponent,
    TechStackComponent,
    MaintenanceComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    CommonModule,
    AppRoutingModule,
    IvyCarouselModule,
    NgxPaginationModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgxWhastappButtonModule,
    HttpClientModule,
    //
    CoreModule,
    AgmCoreModule.forRoot({
      apiKey: `${environment.googleMapsAPIKey}`,
      libraries: ['places'],
    }),
  ],
  providers: [MaintenanceGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
