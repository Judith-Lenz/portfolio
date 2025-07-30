import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../../shared/services/translation.service';

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

  constructor(private translation: TranslationService) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  changeLanguage(lang: string) {
    this.languageChanged.emit(lang);
  }
}
