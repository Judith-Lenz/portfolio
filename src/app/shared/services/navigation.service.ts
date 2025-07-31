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
      // ❌ NICHT mehr: window.scrollTo({ top: 0 });
      this.scrollToElement(fragment);
      this.updateFragmentInUrl(fragment);
    } else {
      this.router.navigate(['/']).then(() => {
        // ✅ NUR HIER: nach Routenwechsel auf top scrollen
        window.scrollTo({ top: 0 });

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

  navigateToFragmentWithoutScroll(fragment: string): void {
    const basePath = this.getBasePath();

    if (this.isOnHomePage(basePath)) {
      this.scrollToElement(fragment, false); // false = kein smooth scroll
      this.updateFragmentInUrl(fragment);
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.scrollToElement(fragment, false); // ❗ scrollen ohne Animation
          this.updateFragmentInUrl(fragment);
        }, 100);
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

  private scrollToElement(fragment: string, smooth: boolean = true): void {
    const el = document.getElementById(fragment);
    if (el) {
      const headerOffset = 128;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: smooth ? 'smooth' : 'auto',
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
