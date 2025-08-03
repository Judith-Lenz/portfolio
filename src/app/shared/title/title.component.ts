import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { NavigationService } from '../../shared/services/navigation.service';

/**
 * Component for displaying the website title with click-based navigation.
 */
@Component({
  selector: 'app-title',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent {
  /**
   * Injects navigation and router services.
   * @param navigation The navigation service.
   * @param router The Angular router.
   */
  constructor(private navigation: NavigationService, private router: Router) {}

  /**
   * Handles clicks on the title and navigates accordingly.
   * - Scrolls to top if already on home page.
   * - Navigates to top or contact section depending on current route.
   */
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
