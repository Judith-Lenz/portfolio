import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollTrackingService } from '../../shared/services/scroll-tracking.service';

/**
 * Service for handling scroll and route-based navigation.
 */
@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  /**
   * Injects the Angular router and scroll tracking service.
   * @param router Angular router instance.
   * @param scrollTrackingService Service for managing scroll tracking state.
   */
  constructor(
    private router: Router,
    private scrollTrackingService: ScrollTrackingService
  ) {}

  /**
   * Navigates to a section on the current or home route.
   * @param fragment The section ID to scroll to.
   */
  navigateToSection(fragment: string): void {
    this.scrollTrackingService.pauseTracking();
    if (this.router.url.startsWith('/')) {
      setTimeout(() => {
        this.scrollToSection(fragment);
      }, 100);
    } else {
      this.router.navigate(['/'], { fragment }).then(() => {
        setTimeout(() => {
          this.scrollToSection(fragment);
        }, 100);
      });
    }
  }

  /**
   * Smoothly scrolls to the given section, adjusting for header height.
   * @param fragment The section ID to scroll to.
   */
  scrollToSection(fragment: string): void {
    const el = document.getElementById(fragment);
    if (el) {
      const headerOffset = 70;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

  /**
   * Navigates to the homepage and scrolls to the top immediately.
   */
  goToHomeAndJumpToTop(): void {
    this.router.navigate(['/']).then(() => {
      this.jumpToTop();
    });
  }

  /**
   * Navigates to the homepage and scrolls to the contact section.
   */
  goToHomeAndScrollToContact(): void {
    this.router.navigate(['/'], { fragment: 'contact' }).then(() => {
      this.jumpToTop();
      setTimeout(() => {
        this.navigateToSection('contact');
      }, 100);
    });
  }

  /**
   * Smoothly scrolls to the top of the page and resets scroll tracking.
   */
  scrollToTop(): void {
    this.scrollTrackingService.pauseTracking();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.replaceState(null, '', '/');
    this.scrollTrackingService.setActiveSection('');
  }

  /**
   * Navigates to the homepage and scrolls to the section after page load.
   * @param fragment The section ID to scroll to.
   */
  navigateFreshToSection(fragment: string): void {
    this.scrollTrackingService.pauseTracking();
    this.router.navigate(['/'], { fragment }).then(() => {
      this.jumpToTop();
      setTimeout(() => {
        this.navigateToSection(fragment);
      }, 100);
    });
  }

  /**
   * Instantly scrolls to the top of the page (no animation).
   */
  jumpToTop(): void {
    window.scrollTo({ top: 0 });
  }
}
