import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../shared/services/translation.service';

/**
 * Component displaying the legal notice (Impressum) page.
 */
@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss',
})
export class LegalNoticeComponent implements OnInit {
  /**
   * Default contact email address shown on the page.
   */
  email: string = 'kontakt@judithlenz.de';

  /**
   * Creates the component and injects the translation service.
   * @param translation The translation service.
   */
  constructor(private translation: TranslationService) {}

  /**
   * Scrolls to the top of the page on component initialization.
   */
  ngOnInit() {
    window.scrollTo({ top: 0 });
  }
}
