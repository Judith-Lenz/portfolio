import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../shared/services/translation.service';
import { NavigationService } from '../../shared/services/navigation.service';

@Component({
  selector: 'app-landing-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './landing-hero.component.html',
  styleUrl: './landing-hero.component.scss',
})
export class LandingHeroComponent {
  email: string = 'kontakt@judithlenz.de';
  constructor(
    private translation: TranslationService,
    private navigationService: NavigationService
  ) {}

  navigateTo(fragment: string): void {
    this.navigationService.navigateToSection(fragment);
  }
}
