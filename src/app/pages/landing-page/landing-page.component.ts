import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/core/services/cononical.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  title = 'Kumbirai Nigel Katekwe - Full-Stack Developer';

  constructor(
    private metaTagService: Meta,
    private titleService: Title,
    private canonicalService: CanonicalService
  ) {}

  ngOnInit() {
    this.canonicalService.setCanonicalURL();
    this.titleService.setTitle(this.title);
    this.metaTagService.addTags([
      {
        name: 'description',
        content:
          'Hi! Im a Full-Stack Developer who does Web Design, Web Development, Software Development, API Development, Search Engine Optimisation (SEO)',
      },
      {
        name: 'keywords',
        content:
          'Web Design, Web Development, Software Development, API Development, Search Engine Optimisation (SEO), Software Developer, Full-Stack Developer, Software Engineer, Backend Developer, Frontend Developer, Technology, Kumbirai, Nigel, Katekwe',
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Kumbirai Nigel Katekwe' },
      {
        name: 'google-site-verification',
        content: '3Mp-YaqVE2YuJE9ROnM6wmlRI0wgZYtoZc7OzJe1bN8',
      },
      { name: 'og:title', content: this.title },
      { name: 'og:type', content: 'website' },
      { name: 'og:locale', content: 'en_US' },
      { name: 'og:url', content: 'https://knkatekwe.tech/' },
      { name: 'og:title', content: 'width=device-width, initial-scale=1' },
      { name: 'og:site_name', content: 'Kumbirai Nigel Katekwe' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:creator', content: '@n1g3l101' },
      { name: 'twitter:site', content: '@n1g3l101' },
      { charset: 'UTF-8' },
    ]);
  }
}
