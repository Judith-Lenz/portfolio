import { Component, OnInit } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { TitleComponent } from '../shared/title/title.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, BurgerMenuComponent, TitleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller) {}

  scrollToSection(sectionId: string) {
    const headerOffset = 128; // Höhe Header!
    const element = document.getElementById(sectionId);

    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

  /**
   * The currently selected language. Defaults to 'de' (German).
   */
  selectedLanguage: string = 'de'; // Standard ist Deutsch

  /**
   * Lifecycle hook that runs after component initialization.
   * Retrieves the previously selected language from localStorage.
   */
  ngOnInit() {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      this.selectedLanguage = savedLang;
    }
  }

  /**
   * Updates the selected language and logs the change.
   * @param {string} lang - The language code to set ('de' or 'en').
   */
  setLanguage(lang: string) {
    this.selectedLanguage = lang;
    localStorage.setItem('language', lang);
    console.log('Aktuelle Sprache:', this.selectedLanguage);
  }
}
