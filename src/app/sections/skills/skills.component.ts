import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../shared/services/translation.service';
import { NavigationService } from '../../shared/services/navigation.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  constructor(
    private translation: TranslationService,
    private navigationService: NavigationService
  ) {}

  forceScrollTo(fragment: string): void {
    this.navigationService.scrollToFragment(fragment);
  }
}
