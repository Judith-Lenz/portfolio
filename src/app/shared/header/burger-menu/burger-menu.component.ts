import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../../shared/services/translation.service';
import { NavigationService } from '../../services/navigation.service';
import { ScrollTrackingService } from '../../services/scroll-tracking.service';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss',
})
export class BurgerMenuComponent {
  @Input() selectedLanguage!: string;
  @Output() languageChanged = new EventEmitter<string>();

  menuOpen = false;

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

  activeSection: string = '';

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  changeLanguage(lang: string) {
    this.languageChanged.emit(lang);
  }

  onMenuClick(fragment: string): void {
    if (this.router.url === '/' || this.router.url.startsWith('/#')) {
      this.navigationService.navigateToSection(fragment);
    } else {
      this.navigationService.navigateFreshToSection(fragment);
    }
  }
}
