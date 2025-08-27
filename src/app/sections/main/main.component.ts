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
  styleUrls: ['./main.component.scss'],
})

/**
 * Main component containing all sections and handling scroll tracking + AOS animations.
 */
export class MainComponent implements OnInit, AfterViewInit, OnDestroy {
  email: string = 'kontakt@judithlenz.de';

  constructor(private scrollService: ScrollTrackingService) {}

  /**
   * Refresh AOS animations on window resize.
   */
  private onResize = () => AOS.refresh();

  /**
   * Register scroll tracking listener.
   */
  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll, true);
  }

  /**
   * Initialize AOS animations after view init.
   */
  ngAfterViewInit(): void {
    AOS.init({ duration: 400, once: true, easing: 'ease-out' });
    window.addEventListener('resize', this.onResize);

    setTimeout(() => AOS.refreshHard(), 0);
  }

  /**
   * Clean up all event listeners on destroy.
   */
  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll, true);
    window.removeEventListener('resize', this.onResize);
  }

  /**
   * Handle scroll events and update active section + URL.
   */
  onScroll = (): void => {
    if (this.scrollService.isTrackingPaused()) return;

    const sectionIds = ['about', 'skills', 'portfolio', 'contact'];
    const activeId = this.findActiveSection(sectionIds);

    this.updateActiveSection(activeId);
    this.updateUrlFragment(activeId);
  };

  /**
   * Find currently visible section by ID.
   * @param sectionIds List of section IDs
   * @returns Active section ID or empty string
   */
  private findActiveSection(sectionIds: string[]): string {
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && this.isElementInView(el)) return id;
    }
    return '';
  }

  /**
   * Check if element is currently in view.
   * @param el HTMLElement to check
   * @returns True if in view, otherwise false
   */
  private isElementInView(el: HTMLElement): boolean {
    const rect = el.getBoundingClientRect();
    return rect.top <= 130 && rect.bottom > 130;
  }

  /**
   * Update the active section in the scroll service.
   * @param id Section ID
   */
  private updateActiveSection(id: string): void {
    this.scrollService.setActiveSection(id);
  }

  /**
   * Update the URL fragment without reloading.
   * @param id Section ID
   */
  private updateUrlFragment(id: string): void {
    const url = id ? `#${id}` : `/`;
    history.replaceState(null, '', url);
  }
}
