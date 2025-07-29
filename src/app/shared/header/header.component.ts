import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { TitleComponent } from '../title/title.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

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
   * The currently selected language. Defaults to 'de' (German).
   */
  selectedLanguage: string = 'de'; // Standard ist Deutsch
  constructor(private translate: TranslateService) {}

  /**
   * Lifecycle hook that runs after component initialization.
   * Retrieves the previously selected language from localStorage.
   */
  ngOnInit() {
    const savedLang = localStorage.getItem('language') || 'de';
    this.selectedLanguage = savedLang;
    this.translate.use(savedLang);
  }

  /**
   * Updates the selected language and logs the change.
   * @param {string} lang - The language code to set ('de' or 'en').
   */
  setLanguage(lang: string) {
    this.selectedLanguage = lang;
    localStorage.setItem('language', lang);
    this.translate.use(lang);
    document.documentElement.lang = lang;
    console.log('Aktuelle Sprache:', lang);
  }
}
