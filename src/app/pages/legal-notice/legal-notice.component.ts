import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss',
})
export class LegalNoticeComponent implements OnInit {
  email: string = 'judith.lenz@outlook.de';

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrollt immer nach oben
  }
}
