import { Component } from '@angular/core';
import { TitleComponent } from '../shared/title/title.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
