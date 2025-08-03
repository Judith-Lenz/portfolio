import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { TitleComponent } from '../title/title.component';
import { RouterModule, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../shared/services/translation.service';
import { NavigationService } from '../services/navigation.service';
import { ScrollTrackingService } from '../../shared/services/scroll-tracking.service';

/**
 * Component representing the website header with language switch, title, and burger menu.
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    BurgerMenuComponent,
    TitleComponent,
    RouterModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  /**
   * Currently selected language.
   */
  selectedLanguage: string = 'en';

  /**
   * ID of the currently active section on the page.
   */
  activeSection: string = '';

  /**
   * Injects services for translation, navigation, routing, and scroll tracking.
   * @param translationService The translation service.
   * @param navigationService The navigation service.
   * @param router The Angular router.
   * @param scrollService The scroll tracking service.
   */
  constructor(
    private translationService: TranslationService,
    private navigationService: NavigationService,
    private router: Router,
    private scrollService: ScrollTrackingService
  ) {}

  /**
   * Initializes the selected language and subscribes to active section updates.
   */
  ngOnInit() {
    this.selectedLanguage = this.translationService.getCurrentLanguage();
    this.scrollService.activeSection$.subscribe((section) => {
      this.activeSection = section;
    });
  }

  /**
   * Changes the language of the application.
   * @param lang The language code to switch to.
   */
  setLanguage(lang: string) {
    this.selectedLanguage = lang;
    this.translationService.use(lang);
  }

  /**
   * Handles navigation when a menu item is clicked.
   * @param fragment The section ID to scroll to.
   */
  onMenuClick(fragment: string): void {
    if (this.router.url === '/' || this.router.url.startsWith('/#')) {
      this.navigationService.navigateToSection(fragment);
    } else {
      this.navigationService.navigateFreshToSection(fragment);
    }
  }
}
