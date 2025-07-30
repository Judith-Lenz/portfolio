import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../shared/services/translation.service';
import { NavigationService } from '../../shared/services/navigation.service';
import { RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private translation: TranslationService,
    private navService: NavigationService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      privacy: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      this.http
        .post('https://judithlenz.de/sendMail.php', formData, {
          responseType: 'text',
        })
        .subscribe({
          next: (response) => {
            console.log('✅ Email sent!', response);
            this.contactForm.reset();
          },
          error: (error) => {
            console.error('❌ Sending failed', error);
          },
        });
    } else {
      console.log('❌ Formular ungültig');

      Object.keys(this.contactForm.controls).forEach((controlName) => {
        const control = this.contactForm.get(controlName);
        control?.markAsTouched();
        control?.markAsDirty();
      });
    }
  }

  markAsTouched(controlName: string) {
    const control = this.contactForm.get(controlName);
    if (control && !control.touched) {
      control.markAsTouched();
      control.markAsDirty();
    }
  }

  onBackToTopClick() {
    this.navService.navigateToHome();
  }
}
