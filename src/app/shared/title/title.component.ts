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

  navigateToTop(): void {
    const currentPath = window.location.pathname;

    if (currentPath === '/privacy-policy') {
      if (window.history.length > 1) {
        history.back();
      } else {
        this.navigationService.scrollToFragment('contact');
      }
    } else {
      this.navigationService.navigateToTop();
    }
  }
}
