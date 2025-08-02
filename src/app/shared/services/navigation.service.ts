import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private router: Router) {}

  // Hauptfunktion für Header + Burger-Menü + buttons, die zu contact sollen
  navigateToSection(fragment: string): void {
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

  //Navigiere zur Hauptseite und springe ganz nach oben
  goToHomeAndJumpToTop(): void {
    this.router.navigate(['/']).then(() => {
      // Sobald Navigation abgeschlossen ist, sofort an den Seitenanfang springen
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  jumpToTop(): void {
    window.scrollTo({ top: 0 });
  }

  goToHome(): void {
    this.router.navigate(['/']);
  }
}
