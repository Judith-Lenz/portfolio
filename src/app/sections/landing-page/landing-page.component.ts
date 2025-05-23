import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { ContactComponent } from '../contact/contact.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    TestimonialsComponent,
    ContactComponent,
    RouterModule,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  email: string = 'kontakt.judithlenz@outlook.de';
}
