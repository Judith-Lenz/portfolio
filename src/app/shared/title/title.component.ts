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
  constructor(private navigation: NavigationService, private router: Router) {}

  onTitleClick(): void {
    if (this.router.url === '/' || this.router.url.startsWith('/#')) {
      this.navigation.scrollToTop();
    } else if (this.router.url === '/legal-notice') {
      this.navigation.goToHomeAndJumpToTop();
    } else if (this.router.url === '/privacy-policy') {
      this.navigation.goToHomeAndScrollToContact();
    }
  }
}
