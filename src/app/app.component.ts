import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './shared/header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    HeaderComponent,
    RouterOutlet,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'meinPortfolio';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private translate: TranslateService
  ) {
    const savedLang = localStorage.getItem('appLanguage') || 'de';
    translate.setDefaultLang('de');
    translate.use(savedLang);

    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        setTimeout(() => {
          this.scrollToSection(fragment);
        }, 100);
      }
    });
  }

  scrollToSection(sectionId: string) {
    const element = document.querySelector(`[id='${sectionId}']`);
    const headerOffset = 128; // Höhe Header

    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerOffset,
        behavior: 'smooth',
      });
    }
  }
}
