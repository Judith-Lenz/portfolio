import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../shared/services/translation.service';
import { NavigationService } from '../../shared/services/navigation.service';
import { ContactFormCacheService } from '../../shared/services/contact-form-cache.service';
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

/**
 * Contact form component with validation, caching, and submission.
 */
export class ContactComponent {
  hover = false;
  contactForm: FormGroup;

  /**
   * Initializes the contact form and loads cached values if available.
   */
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private translation: TranslationService,
    private navigation: NavigationService,
    public formCache: ContactFormCacheService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      privacy: [false, Validators.requiredTrue],
    });

    const cached = this.formCache.getForm();
    if (cached) {
      this.contactForm.patchValue(cached);
    }
  }

  isSubmitting = false;

  /**
   * Handles form submission; validates form and triggers sending.
   */
  onSubmit() {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.startSubmission();
    } else {
      this.handleInvalidForm();
    }
  }

  /**
   * Starts the form submission by setting state and preparing data.
   */
  private startSubmission(): void {
    this.isSubmitting = true;
    const formData = this.contactForm.value;

    this.sendForm(formData);
  }

  /**
   * Sends the form data to the backend endpoint.
   * @param formData The form data to send.
   */
  private sendForm(formData: any): void {
    this.http
      .post('https://judithlenz.de/sendMail.php', formData, {
        responseType: 'text',
      })
      .subscribe({
        next: (response) => this.handleSuccess(response),
        error: (error) => this.handleError(error),
      });
  }

  /**
   * Handles successful form submission: resets form and clears cache.
   * @param response Response from backend.
   */
  private handleSuccess(response: any): void {
    console.log('✅ Email sent!', response);
    this.contactForm.reset();
    this.formCache.clearForm();
    this.isSubmitting = false;
  }

  /**
   * Handles form submission error.
   * @param error Error returned from backend.
   */
  private handleError(error: any): void {
    console.error('❌ Sending failed', error);
    this.isSubmitting = false;
  }

  /**
   * Marks all controls as touched and dirty if the form is invalid.
   */
  private handleInvalidForm(): void {
    console.log('❌ Formular ungültig');
    Object.keys(this.contactForm.controls).forEach((controlName) => {
      const control = this.contactForm.get(controlName);
      control?.markAsTouched();
      control?.markAsDirty();
    });
  }

  /**
   * Marks a single form control as touched and dirty.
   * @param controlName The name of the control.
   */
  markAsTouched(controlName: string) {
    const control = this.contactForm.get(controlName);
    if (control && !control.touched) {
      control.markAsTouched();
      control.markAsDirty();
    }
  }

  /**
   * Scrolls to the top of the page using the navigation service.
   */
  goToTop(): void {
    this.navigation.scrollToTop();
  }
}
