import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { TitleComponent } from '../title/title.component';
import { RouterModule, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../shared/services/translation.service';
import { NavigationService } from '../services/navigation.service';
import { ScrollTrackingService } from '../../shared/services/scroll-tracking.service';

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
  selectedLanguage: string = 'en';

  constructor(
    private translationService: TranslationService,
    private navigationService: NavigationService,
    private router: Router,
    private scrollService: ScrollTrackingService
  ) {}
  activeSection: string = '';
  ngOnInit() {
    this.selectedLanguage = this.translationService.getCurrentLanguage();
    this.scrollService.activeSection$.subscribe((section) => {
      this.activeSection = section;
    });
  }

  setLanguage(lang: string) {
    this.selectedLanguage = lang;
    this.translationService.use(lang);
  }

  onMenuClick(fragment: string): void {
    if (this.router.url === '/' || this.router.url.startsWith('/#')) {
      this.navigationService.navigateToSection(fragment);
    } else {
      this.navigationService.navigateFreshToSection(fragment);
    }
  }

  // navigateTo(fragment: string): void {
  //   this.navigationService.navigateToSection(fragment);
  // }
}
