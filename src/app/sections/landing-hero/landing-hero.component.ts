import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../shared/services/translation.service';
import { NavigationService } from '../../shared/services/navigation.service';

/**
 * Component for the landing page hero section.
 */
@Component({
  selector: 'app-landing-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './landing-hero.component.html',
  styleUrl: './landing-hero.component.scss',
})
export class LandingHeroComponent {
  /**
   * Default contact email address shown in the hero section.
   */
  email: string = 'kontakt@judithlenz.de';

  /**
   * Injects translation and navigation services.
   * @param translation The translation service.
   * @param navigationService The navigation service.
   */
  constructor(
    private translation: TranslationService,
    private navigationService: NavigationService
  ) {}

  /**
   * Navigates to a section of the page using a fragment identifier.
   * @param fragment The section ID to scroll to.
   */
  navigateTo(fragment: string): void {
    this.navigationService.navigateToSection(fragment);
  }
}
