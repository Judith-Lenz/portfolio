import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { ContactComponent } from '../contact/contact.component';
import { RouterModule } from '@angular/router';
import { LandingHeroComponent } from '../landing-hero/landing-hero.component';
import { ScrollTrackingService } from '../../shared/services/scroll-tracking.service';
import AOS from 'aos';

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
  styleUrls: ['./main.component.scss'], // <-- plural
})
export class MainComponent implements OnInit, AfterViewInit, OnDestroy {
  email: string = 'kontakt@judithlenz.de';

  constructor(private scrollService: ScrollTrackingService) {}

  // AOS: bei Resize neu messen
  private onResize = () => AOS.refresh();

  // Scroll-Tracking registrieren
  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll, true);
  }

  // AOS initialisieren
  ngAfterViewInit(): void {
    AOS.init({ duration: 400, once: true, easing: 'ease-out' });
    window.addEventListener('resize', this.onResize);

    // wichtig bei Angular: nach einem Tick hart refreshen
    setTimeout(() => AOS.refreshHard(), 0);
  }

  // Beide Listener sauber entfernen (nur EINE ngOnDestroy!)
  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll, true);
    window.removeEventListener('resize', this.onResize);
  }

  // ---- Dein bestehendes Scroll-Tracking ----
  onScroll = (): void => {
    if (this.scrollService.isTrackingPaused()) return;

    const sectionIds = ['about', 'skills', 'portfolio', 'contact'];
    const activeId = this.findActiveSection(sectionIds);

    this.updateActiveSection(activeId);
    this.updateUrlFragment(activeId);
  };

  private findActiveSection(sectionIds: string[]): string {
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && this.isElementInView(el)) return id;
    }
    return '';
  }

  private isElementInView(el: HTMLElement): boolean {
    const rect = el.getBoundingClientRect();
    return rect.top <= 130 && rect.bottom > 130;
  }

  private updateActiveSection(id: string): void {
    this.scrollService.setActiveSection(id);
  }

  private updateUrlFragment(id: string): void {
    const url = id ? `#${id}` : `/`;
    history.replaceState(null, '', url);
  }
}
