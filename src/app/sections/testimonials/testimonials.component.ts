import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  references = [
    {
      text: 'Judith und ich haben während unserer Weiterbildung zum Frontend Developer gemeinsam an einem Kanban-Board-Projekt gearbeitet. Sie ist eine verlässliche und motivierte Teamplayerin, die mit kreativen Lösungen, Ehrgeiz und Zuverlässigkeit überzeugt. Ihre schnelle Auffassungsgabe und ihr offener Austausch haben die Zusammenarbeit super  angenehm gemacht.',
      name: 'M. Marrocu – Team Partner',
      image: 'assets/image/User.png',
    },
    {
      text: 'Judith arbeitet sehr strukturiert, denkt mit und erledigt ihre Aufgaben effizient. Die Zusammenarbeit mit ihr war nicht nur fachlich sehr angenehm, sondern auch menschlich eine Bereicherung für das Team. Sie ist sehr zuverlässig und engagiert.',
      name: 'A. Argenziano – Project Partner',
      image: 'assets/image/Screenshot Alessandro2.jpg',
    },
  ];

  currentIndex = 0;

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
