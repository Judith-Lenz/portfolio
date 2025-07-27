import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../models/project.model';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.scss',
})
export class ProjectItemComponent {
  @Input() project!: Project;
  constructor(private translate: TranslateService) {}
}
