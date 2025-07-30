import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('language') || 'en';
    this.translate.setDefaultLang('en');
    this.translate.use(savedLang);
    document.documentElement.lang = savedLang;
  }

  use(lang: string) {
    this.translate.use(lang);
    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }

  get(key: string | string[]) {
    return this.translate.get(key);
  }

  get onLangChange() {
    return this.translate.onLangChange;
  }

  getTranslateInstance() {
    return this.translate;
  }
}
