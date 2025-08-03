import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../../shared/services/translation.service';
import { NavigationService } from '../../services/navigation.service';
import { ScrollTrackingService } from '../../services/scroll-tracking.service';

/**
 * Component representing the responsive burger menu with language selection and scroll navigation.
 */
@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss',
})
export class BurgerMenuComponent {
  /**
   * Currently selected language.
   */
  @Input() selectedLanguage!: string;

  /**
   * Emits selected language changes to the parent component.
   */
  @Output() languageChanged = new EventEmitter<string>();

  /**
   * Whether the burger menu is currently open.
   */
  menuOpen = false;

  /**
   * ID of the currently active section on the page.
   */
  activeSection: string = '';

  /**
   * Injects services for translation, navigation, scroll tracking, and routing.
   * Subscribes to active section changes.
   */
  constructor(
    private translation: TranslationService,
    private navigationService: NavigationService,
    private scrollService: ScrollTrackingService,
    private router: Router
  ) {
    this.scrollService.activeSection$.subscribe((section) => {
      this.activeSection = section;
    });
  }

  /**
   * Toggles the burger menu open/closed state.
   */
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  /**
   * Closes the burger menu.
   */
  closeMenu() {
    this.menuOpen = false;
  }

  /**
   * Emits a language change event.
   * @param lang The selected language code.
   */
  changeLanguage(lang: string) {
    this.languageChanged.emit(lang);
  }

  /**
   * Navigates to a section on the same or different route.
   * @param fragment The section ID to navigate to.
   */
  onMenuClick(fragment: string): void {
    if (this.router.url === '/' || this.router.url.startsWith('/#')) {
      this.navigationService.navigateToSection(fragment);
    } else {
      this.navigationService.navigateFreshToSection(fragment);
    }
  }
}
