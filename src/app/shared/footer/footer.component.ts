import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TitleComponent, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  email: string = 'judith.lenz@outlook.de';

  sendMail() {
    window.location.href = 'mailto:' + this.email;
  }
  currentYear: number = new Date().getFullYear();
}
