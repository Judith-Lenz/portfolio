import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'meinPortfolio';

  @ViewChild('about') aboutSection!: ElementRef;
  @ViewChild('skills') skillsSection!: ElementRef;
  @ViewChild('portfolio') portfolioSection!: ElementRef;
  @ViewChild('contact') contactSection!: ElementRef;

  ngAfterViewInit() {
    // Sicherstellen, dass ViewChild funktioniert, falls Elemente asynchron geladen werden
    setTimeout(() => {}, 0);
  }

  scrollTo(section: ElementRef) {
    if (section) {
      section.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
}
