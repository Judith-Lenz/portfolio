import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../shared/services/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TitleComponent, RouterModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(private translation: TranslationService) {}
  email: string = 'kontakt@judithlenz.de';

  sendMail() {
    window.location.href = 'mailto:' + this.email;
  }
  currentYear: number = new Date().getFullYear();
}
