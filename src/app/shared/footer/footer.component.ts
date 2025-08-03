import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../shared/services/translation.service';

/**
 * Component displaying the website footer with contact and navigation info.
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TitleComponent, RouterModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  /**
   * Email address shown in the footer and used for mail links.
   */
  email: string = 'kontakt@judithlenz.de';

  /**
   * Current year displayed in the copyright notice.
   */
  currentYear: number = new Date().getFullYear();

  /**
   * Injects the translation service for language support.
   * @param translation The translation service.
   */
  constructor(private translation: TranslationService) {}

  /**
   * Opens the default mail client with the contact email.
   */
  sendMail() {
    window.location.href = 'mailto:' + this.email;
  }
}
