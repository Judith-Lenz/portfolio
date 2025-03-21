import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent {
  constructor(private router: Router) {}
  navigateToHome() {
    const path = this.router.url.split('#')[0];
    if (path === '/' || path === '') {
      // Schon auf der Hauptseite → smooth scroll nach oben
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Auf einer anderen Seite → navigieren und ohne smooth scrollen
      this.router.navigate(['/']).then(() => {
        window.scrollTo({ top: 0 });
      });
    }
  }
}
