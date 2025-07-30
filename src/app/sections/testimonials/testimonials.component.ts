import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Testimonial } from '../../shared/models/testimonial.model';
import { TranslationService } from '../../shared/services/translation.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  references: Testimonial[] = [];
  constructor(private translation: TranslationService) {
    this.setReferences();
    this.translation.onLangChange.subscribe(() => {
      this.setReferences();
    });
  }

  currentIndex = 0;
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

  get currentReference() {
    return this.references[this.currentIndex];
  }

  nextReference() {
    this.currentIndex = (this.currentIndex + 1) % this.references.length;
  }

  previousReference() {
    this.currentIndex =
      (this.currentIndex - 1 + this.references.length) % this.references.length;
  }
}
