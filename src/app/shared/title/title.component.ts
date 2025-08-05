import { Component, Output, EventEmitter } from '@angular/core';
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
   * Emits an event when the title (logo) is clicked.
   * Used by the parent component to trigger side effects such as closing the burger menu.
   */
  @Output() titleClicked = new EventEmitter<void>();

  /**
   * Injects navigation and router services.
   * @param navigation The navigation service.
   * @param router The Angular router.
   */
  constructor(private navigation: NavigationService, private router: Router) {}

  /**
   * Handles clicks on the title.
   * Emits the `titleClicked` event and performs scroll or navigation logic based on the current route.
   */
  onTitleClick(): void {
    this.titleClicked.emit();
    if (this.router.url === '/' || this.router.url.startsWith('/#')) {
      this.navigation.scrollToTop();
    } else if (this.router.url === '/legal-notice') {
      this.navigation.goToHomeAndJumpToTop();
    } else if (this.router.url === '/privacy-policy') {
      this.navigation.goToHomeAndScrollToContact();
    }
  }
}
