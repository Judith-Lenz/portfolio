import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-landing-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './landing-hero.component.html',
  styleUrl: './landing-hero.component.scss',
})
export class LandingHeroComponent {
  email: string = 'kontakt@judithlenz.de';
  constructor(private translate: TranslateService) {}
}
