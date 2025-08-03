import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../models/project.model';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../shared/services/translation.service';

/**
 * Component for displaying a single project item in the portfolio.
 */
@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.scss',
})
export class ProjectItemComponent {
  /**
   * Project data to be displayed.
   */
  @Input() project!: Project;

  /**
   * Injects the translation service.
   * @param translation The translation service.
   */
  constructor(private translation: TranslationService) {}
}
