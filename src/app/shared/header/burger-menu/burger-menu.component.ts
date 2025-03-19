import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss',
})
export class BurgerMenuComponent {
  @Input() selectedLanguage!: string;
  @Output() languageChanged = new EventEmitter<string>();

  changeLanguage(lang: string) {
    this.languageChanged.emit(lang);
  }

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
