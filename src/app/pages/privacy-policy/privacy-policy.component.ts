import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../shared/services/translation.service';

/**
 * Component displaying the privacy policy (Datenschutzerklärung) page.
 */
@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent implements OnInit {
  /**
   * Injects the translation service for language support.
   * @param translation The translation service.
   */
  constructor(public translation: TranslationService) {}

  /**
   * Scrolls to the top of the page on component initialization.
   */
  ngOnInit() {
    window.scrollTo({ top: 0 });
  }
}
