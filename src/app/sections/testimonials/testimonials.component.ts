import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Testimonial } from '../../shared/models/testimonial.model';
import { TranslationService } from '../../shared/services/translation.service';

/**
 * Component displaying testimonials with language support and navigation.
 */
@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  /**
   * List of translated testimonial entries.
   */
  references: Testimonial[] = [];

  /**
   * Index of the currently displayed testimonial.
   */
  currentIndex = 0;

  /**
   * Injects the translation service and loads initial testimonials.
   * Reloads content when language changes.
   * @param translation The translation service.
   */
  constructor(private translation: TranslationService) {
    this.setReferences();
    this.translation.onLangChange.subscribe(() => {
      this.setReferences();
    });
  }

  /**
   * Translates and sets the list of testimonials.
   */
  setReferences() {
    this.translation
      .get([
        'testimonials.marco.text',
        'testimonials.marco.name',
        'testimonials.alessandro.text',
        'testimonials.alessandro.name',
      ])
      .subscribe((translations) => {
        this.references = [
          {
            text: translations['testimonials.marco.text'],
            name: translations['testimonials.marco.name'],
            image: 'assets/image/User.png',
          },
          {
            text: translations['testimonials.alessandro.text'],
            name: translations['testimonials.alessandro.name'],
            image: 'assets/image/Screenshot Alessandro2.jpg',
          },
        ];
      });
  }

  /**
   * Returns the currently displayed testimonial.
   */
  get currentReference() {
    return this.references[this.currentIndex];
  }

  /**
   * Shows the next testimonial in the list.
   */
  nextReference() {
    this.currentIndex = (this.currentIndex + 1) % this.references.length;
  }

  /**
   * Shows the previous testimonial in the list.
   */
  previousReference() {
    this.currentIndex =
      (this.currentIndex - 1 + this.references.length) % this.references.length;
  }
}
