import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss',
})
export class BurgerMenuComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
