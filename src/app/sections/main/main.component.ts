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

/**
 * Main component that includes all homepage sections and handles scroll tracking.
 */
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
  /**
   * Default contact email address shown in the footer.
   */

  email: string = 'kontakt@judithlenz.de';

  /**
   * Injects the scroll tracking service.
   * @param scrollService Service for tracking the active section on scroll.
   */
  constructor(private scrollService: ScrollTrackingService) {}

  /**
   * Registers the scroll event listener on component init.
   */
  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll, true);
  }

  /**
   * Removes the scroll event listener on component destroy.
   */
  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll, true);
  }

  /**
   * Handles the scroll event, detects the active section, and updates the URL.
   */
  onScroll = (): void => {
    if (this.scrollService.isTrackingPaused()) return;

    const sectionIds = ['about', 'skills', 'portfolio', 'contact'];
    const activeId = this.findActiveSection(sectionIds);

    this.updateActiveSection(activeId);
    this.updateUrlFragment(activeId);
  };

  /**
   * Finds the first visible section from a list of section IDs.
   * @param sectionIds Array of section IDs to check.
   * @returns The ID of the active section or an empty string.
   */
  private findActiveSection(sectionIds: string[]): string {
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && this.isElementInView(el)) {
        return id;
      }
    }
    return '';
  }

  /**
   * Checks if the given element is currently in view (within vertical range).
   * @param el The HTML element to check.
   * @returns True if the element is in view.
   */
  private isElementInView(el: HTMLElement): boolean {
    const rect = el.getBoundingClientRect();
    return rect.top <= 130 && rect.bottom > 130;
  }

  /**
   * Updates the active section in the scroll tracking service.
   * @param id The ID of the active section.
   */
  private updateActiveSection(id: string): void {
    this.scrollService.setActiveSection(id);
  }

  /**
   * Updates the URL fragment to match the active section.
   * @param id The ID of the active section.
   */
  private updateUrlFragment(id: string): void {
    const url = id ? `#${id}` : `/`;
    history.replaceState(null, '', url);
  }
}
