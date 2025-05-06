import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.scss',
})
export class ProjectItemComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() technologies!: string[];
  @Input() imageUrl!: string;
  @Input() liveUrl!: string;
  @Input() githubUrl!: string;
  @Input() align: 'left' | 'right' = 'left';
}
