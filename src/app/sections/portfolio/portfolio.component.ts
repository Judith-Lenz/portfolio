import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectItemComponent } from '../../shared/project-item/project-item.component';

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
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      imageUrl: 'assets/image/Laptop_join2.png',
      liveUrl: 'https://judith-lenz.developerakademie.net/join/index.html',
      githubUrl: 'https://github.com/your-repo',
      align: 'left',
    },
    {
      title: 'Pokédex',
      description:
        'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Api'],
      imageUrl: 'assets/image/Laptop_polloLoco.svg',
      liveUrl: 'https://live-pokedex.com',
      githubUrl: 'https://github.com/pokedex',
      align: 'right',
    },
  ];
}
