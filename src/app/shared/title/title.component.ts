import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent {
  constructor(private router: Router) {}

  navigateToHome() {
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

  private removeFragmentSmoothly() {
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

  private goToHomeAndReset() {
    this.router.navigate(['/']).then(() => {
      this.router.navigate([], {
        fragment: undefined,
        replaceUrl: true,
      });
      window.scrollTo({ top: 0 });
    });
  }
}
