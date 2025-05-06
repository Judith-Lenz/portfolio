import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectItemComponent } from '../../shared/project-item/project-item.component';

// 👇 Hier direkt darunter kommt das rein:
type ProjectAlign = 'left' | 'right';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
  align: ProjectAlign;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectItemComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  public projects: Project[] = [
    {
      title: 'Join',
      description: 'Ein Taskmanager nach Kanban-Prinzip.',
      technologies: ['Angular', 'TypeScript', 'Firebase'],
      imageUrl: 'assets/image/Laptop_join2.png',
      liveUrl: 'https://your-live-link.com',
      githubUrl: 'https://github.com/your-repo',
      align: 'left',
    },
  ];
}
