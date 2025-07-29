import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private router: Router) {}

  navigateToHome(): void {
    const path = this.getCurrentBasePath();
    if (this.isOnHomePage(path)) {
      this.removeFragmentSmoothly();
    } else {
      this.goToHomeAndReset();
    }
  }

  private getCurrentBasePath(): string {
    return this.router.url.split('#')[0];
  }

  private isOnHomePage(path: string): boolean {
    return path === '/' || path === '';
  }

  private removeFragmentSmoothly(): void {
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

  private goToHomeAndReset(): void {
    this.router.navigate(['/']).then(() => {
      this.router.navigate([], {
        fragment: undefined,
        replaceUrl: true,
      });
      window.scrollTo({ top: 0 });
    });
  }
}
