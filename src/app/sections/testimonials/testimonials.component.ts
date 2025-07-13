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

//Marcos Text: Judith and I worked together on a Kanban board project during our frontend development training. She is a reliable and motivated team player who impresses with creative solutions, ambition, and dependability. Her quick grasp of new concepts and open communication made working together a real pleasure.
//Alessandros Text: Judith works in a very structured way, thinks ahead, and completes her tasks efficiently. Working with her was not only professionally pleasant but also a personal asset to the team. She is highly reliable and committed.
