import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { ContactComponent } from '../contact/contact.component';
import { RouterModule } from '@angular/router';
import { LandingHeroComponent } from '../landing-hero/landing-hero.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    LandingHeroComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    TestimonialsComponent,
    ContactComponent,
    RouterModule,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  email: string = 'kontakt@judithlenz.de';
}
