import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

/**
 * Wrapper service for ngx-translate to manage language settings and persistence.
 */
@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  /**
   * Initializes the translation service with saved or default language.
   * @param translate The ngx-translate service instance.
   */
  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('language') || 'en';
    this.translate.setDefaultLang('en');
    this.translate.use(savedLang);
    document.documentElement.lang = savedLang;
  }

  /**
   * Switches the current language and updates browser settings.
   * @param lang Language code to activate (e.g. 'en' or 'de').
   */
  use(lang: string) {
    this.translate.use(lang);
    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);
  }

  /**
   * Returns the currently active language code.
   * @returns The current language code.
   */
  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }

  /**
   * Retrieves translation(s) for a key or array of keys.
   * @param key The translation key or array of keys.
   * @returns An observable with the translation result.
   */
  get(key: string | string[]) {
    return this.translate.get(key);
  }

  /**
   * Observable that emits when the language changes.
   */
  get onLangChange() {
    return this.translate.onLangChange;
  }

  /**
   * Returns the raw TranslateService instance.
   */
  getTranslateInstance() {
    return this.translate;
  }
}
