import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../shared/services/translation.service';
import { NavigationService } from '../../shared/services/navigation.service';

/**
 * Component displaying the skills section of the website.
 */
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
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
