import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationService } from '../../shared/services/navigation.service';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent {
  constructor(private navigationService: NavigationService) {}

  navigateToHome(): void {
    this.navigationService.navigateToHome();
  }
}
