import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { NavigationService } from '../../shared/services/navigation.service';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent {
  constructor(
    private navigationService: NavigationService,
    private router: Router
  ) {}

  navigateToTop(): void {
    const currentPath = window.location.pathname;

    if (currentPath === '/privacy-policy') {
      this.router.navigate(['/'], { fragment: 'contact' });
      setTimeout(() => {
        this.forceScrollTo('contact');
      }, 50); // 1 Tick später
    } else {
      this.navigationService.navigateToTop();
    }
  }

  forceScrollTo(fragment: string): void {
    this.navigationService.scrollToFragment(fragment);
  }
}
