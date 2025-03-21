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
    if (this.router.url === '/' || this.router.url === '') {
      // Falls du schon auf der Hauptseite bist, nur nach oben scrollen
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Falls du auf einer anderen Seite bist, navigiere zur Hauptseite und scrolle nach oben
      this.router.navigate(['/']).then(() => {
        window.scrollTo({ top: 0 });
      });
    }
  }
}
