import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { ContactComponent } from '../contact/contact.component';
import { RouterModule } from '@angular/router';
import { LandingHeroComponent } from '../landing-hero/landing-hero.component';
import { ScrollTrackingService } from '../../shared/services/scroll-tracking.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    LandingHeroComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    TestimonialsComponent,
    ContactComponent,
    RouterModule,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  constructor(private scrollService: ScrollTrackingService) {}
  email: string = 'kontakt@judithlenz.de';

  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll, true);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll, true);
  }

  onScroll = (): void => {
    const sectionIds = ['about', 'skills', 'portfolio', 'contact'];
    let found = false;

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 130 && rect.bottom > 130) {
          this.scrollService.setActiveSection(id);
          history.replaceState(null, '', `#${id}`);
          found = true;
          break;
        }
      }
    }

    if (!found) {
      this.scrollService.setActiveSection('');
      history.replaceState(null, '', `/`);
    }
  };
}
