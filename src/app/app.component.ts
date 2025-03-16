import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    SkillsComponent,
    PortfolioComponent,
    LandingPageComponent,
    TestimonialsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'meinPortfolio';

  @ViewChild('about') aboutSection!: ElementRef;
  @ViewChild('skills') skillsSection!: ElementRef;
  @ViewChild('portfolio') portfolioSection!: ElementRef;
  @ViewChild('contact') contactSection!: ElementRef;

  ngAfterViewInit() {
    // Sicherstellen, dass ViewChild funktioniert, falls Elemente asynchron geladen werden
    setTimeout(() => {}, 0);
  }

  scrollTo(section: ElementRef) {
    if (section) {
      section.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
}
