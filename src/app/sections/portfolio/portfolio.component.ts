import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectItemComponent } from '../../shared/project-item/project-item.component';
import { Project } from '../../shared/models/project.model';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../shared/services/translation.service';

/**
 * Component displaying the portfolio section with project entries.
 */
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule, ProjectItemComponent, RouterModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  /**
   * List of displayed projects.
   */
  public projects: Project[] = [];

  /**
   * Injects the translation service.
   * @param translation The translation service.
   */
  constructor(private translation: TranslationService) {}

  /**
   * Loads projects on init and reloads them when the language changes.
   */
  ngOnInit(): void {
    this.loadProjects();

    this.translation.onLangChange.subscribe(() => {
      this.loadProjects();
    });
  }

  /**
   * Loads and translates project descriptions based on the current language.
   */
  loadProjects(): void {
    this.translation
      .get(['portfolio.join.description', 'portfolio.elPollo.description'])
      .subscribe((translation) => {
        this.projects = [
          {
            title: 'Join',
            description: translation['portfolio.join.description'],
            technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
            imageUrl: 'assets/image/Laptop_join2.png',
            liveUrl: 'https://join-337.developerakademie.net/Join/index.html',
            githubUrl: 'https://github.com/Judith-Lenz/Judiths-Join',
            align: 'left',
          },
          {
            title: 'El Pollo Loco',
            description: translation['portfolio.elPollo.description'],
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
