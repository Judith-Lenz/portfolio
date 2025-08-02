import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollTrackingService } from '../../shared/services/scroll-tracking.service';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(
    private router: Router,
    private scrollTrackingService: ScrollTrackingService
  ) {}

  // Hauptfunktion für Header + Burger-Menü + buttons, die zu contact sollen
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

  //Scrolle smooth zur section und berücksichtige die Höhe des headers
  scrollToSection(fragment: string): void {
    const el = document.getElementById(fragment);
    if (el) {
      const headerOffset = 128;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

  goToHomeAndJumpToTop(): void {
    this.router.navigate(['/']).then(() => {
      this.jumpToTop();
    });
  }

  goToHomeAndScrollToContact(): void {
    this.router.navigate(['/'], { fragment: 'contact' }).then(() => {
      this.jumpToTop();
      setTimeout(() => {
        this.navigateToSection('contact');
      }, 100);
    });
  }

  scrollToTop(): void {
    this.scrollTrackingService.pauseTracking();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.replaceState(null, '', '/');
    this.scrollTrackingService.setActiveSection('');
  }

  navigateFreshToSection(fragment: string): void {
    this.scrollTrackingService.pauseTracking();
    this.router.navigate(['/'], { fragment }).then(() => {
      this.jumpToTop();
      setTimeout(() => {
        this.navigateToSection(fragment);
      }, 100);
    });
  }

  jumpToTop(): void {
    window.scrollTo({ top: 0 });
  }
}
