import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './landing-hero.component.html',
  styleUrl: './landing-hero.component.scss',
})
export class LandingHeroComponent {
  email: string = 'kontakt.judithlenz@outlook.de';
}
