import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../shared/services/translation.service';

/**
 * Component displaying the "About" section of the website.
 */
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  /**
   * Injects the translation service for multilingual support.
   * @param translation The translation service.
   */
  constructor(private translation: TranslationService) {}
}
