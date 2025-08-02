import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { TitleComponent } from '../title/title.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../shared/services/translation.service';
import { NavigationService } from '../services/navigation.service';

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
    private navigationService: NavigationService
  ) {}

  ngOnInit() {
    this.selectedLanguage = this.translationService.getCurrentLanguage();
  }

  setLanguage(lang: string) {
    this.selectedLanguage = lang;
    this.translationService.use(lang);
  }

  navigateTo(fragment: string): void {
    this.navigationService.navigateToSection(fragment);
  }
}
