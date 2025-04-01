import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShadowsComponent } from './shadows/shadows.component';
import { HeaderComponent } from './shared/header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { filter } from 'rxjs/operators'; // wichtig für Router.events

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ShadowsComponent,
    HeaderComponent,
    RouterOutlet,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'meinPortfolio';
  // showShadows = true;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        setTimeout(() => {
          this.scrollToSection(fragment);
        }, 100);
      }
    });

    //Route-Check: Schatten nur auf Startseite anzeigen
    // this.router.events
    //   .pipe(filter((event) => event instanceof NavigationEnd))
    //   .subscribe((event: NavigationEnd) => {
    //     const currentUrl = event.urlAfterRedirects;
    //     this.showShadows = currentUrl === '/' || currentUrl === '/home';
    //     // ODER umdrehen:
    //     // this.showShadows = !['/legal-notice', '/privacy-policy'].includes(currentUrl);
    //   });
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
