import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Testimonial } from '../../shared/models/testimonial.model';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  references: Testimonial[] = [];
  constructor(private translate: TranslateService) {
    this.setReferences();
    this.translate.onLangChange.subscribe(() => {
      this.setReferences();
    });
  }

  currentIndex = 0;
  setReferences() {
    this.translate
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
