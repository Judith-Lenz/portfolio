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
      githubUrl: 'https://github.com/Judith-Lenz/Judiths-Join',
      align: 'left',
    },
    {
      title: 'El Pollo Loco',
      description:
        'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and salsa bottles to fight against the Boss Chicken.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      imageUrl: 'assets/image/Laptop_polloLoco.png',
      liveUrl:
        'https://judith-lenz.developerakademie.net/el_pollo_loco/index.html',
      githubUrl: 'https://github.com/Judith-Lenz/el-pollo-loco',
      align: 'right',
    },
  ];
}
