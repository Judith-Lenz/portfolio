import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslationService } from './shared/services/translation.service';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

/**
 * Root component of the portfolio application.
 * Contains global layout and initializes core services.
 */
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
  /**
   * Application title.
   */
  title = 'meinPortfolio';

  /**
   * Injects core services: route handling, router, and translation.
   * @param route Current activated route.
   * @param router Angular router instance.
   * @param translationService Service for language handling.
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private translationService: TranslationService
  ) {}
}
