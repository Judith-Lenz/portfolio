import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectItemComponent } from '../../shared/project-item/project-item.component';
import { Project } from '../../shared/models/project.model';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule, ProjectItemComponent, RouterModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  public projects: Project[] = [];
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.loadProjects();

    this.translate.onLangChange.subscribe(() => {
      this.loadProjects();
    });
  }

  loadProjects(): void {
    this.translate
      .get(['portfolio.join.description', 'portfolio.elPollo.description'])
      .subscribe((translations) => {
        this.projects = [
          {
            title: 'Join',
            description: translations['portfolio.join.description'],
            technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
            imageUrl: 'assets/image/Laptop_join2.png',
            liveUrl:
              'https://judith-lenz.developerakademie.net/join/index.html',
            githubUrl: 'https://github.com/Judith-Lenz/Judiths-Join',
            align: 'left',
          },
          {
            title: 'El Pollo Loco',
            description: translations['portfolio.elPollo.description'],
            technologies: ['JavaScript', 'HTML', 'CSS'],
            imageUrl: 'assets/image/Laptop_polloLoco.png',
            liveUrl:
              'https://judith-lenz.developerakademie.net/el_pollo_loco/index.html',
            githubUrl: 'https://github.com/Judith-Lenz/el-pollo-loco',
            align: 'right',
          },
        ];
      });
  }
}
