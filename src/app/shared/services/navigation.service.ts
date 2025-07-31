import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private router: Router) {}

  scrollToFragment(fragment: string): void {
    const basePath = this.getBasePath();

    if (this.isOnHomePage(basePath)) {
      this.scrollToElement(fragment);
      this.updateFragmentInUrl(fragment);
    } else {
      this.router.navigate(['/']).then(() => {
        // Nach Navigation zur Startseite: kurz warten, dann scrollen
        setTimeout(() => {
          this.scrollToElement(fragment);
          this.updateFragmentInUrl(fragment);
        }, 100);
      });
    }
  }

  navigateToTop(): void {
    const basePath = this.getBasePath();

    if (this.isOnHomePage(basePath)) {
      this.clearFragmentAndScrollTop();
    } else {
      this.router.navigate(['/']).then(() => {
        this.clearFragmentAndScrollTop();
      });
    }
  }

  // ---------------------
  // Helferfunktionen
  // ---------------------

  private getBasePath(): string {
    return this.router.url.split('#')[0];
  }

  private isOnHomePage(path: string): boolean {
    return path === '/' || path === '';
  }

  private scrollToElement(fragment: string): void {
    const el = document.getElementById(fragment);
    if (el) {
      const headerOffset = 128;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

  private updateFragmentInUrl(fragment: string): void {
    this.router.navigate([], {
      fragment: fragment,
      replaceUrl: true,
      queryParamsHandling: 'preserve',
    });
  }

  private clearFragmentAndScrollTop(): void {
    this.router
      .navigate([], {
        fragment: undefined,
        replaceUrl: true,
        queryParamsHandling: 'preserve',
      })
      .then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  }
}
