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
  AbstractControl,
} from '@angular/forms';
import { finalize } from 'rxjs';

type SubmissionStatus = 'idle' | 'sending' | 'success' | 'error';
interface ContactPayload {
  name: string;
  email: string;
  message: string;
  privacy: boolean;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
/**
 * Contact form component with validation, caching, and HTTP submission.
 */
export class ContactComponent {
  hover = false;
  contactForm!: FormGroup;
  showSuccessOverlay = false;
  successOverlayDuration = 3800;

  submitted = false;
  isSubmitting = false;
  submissionStatus: SubmissionStatus = 'idle';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private translation: TranslationService,
    private navigation: NavigationService,
    public formCache: ContactFormCacheService
  ) {
    this.createForm();
  }

  /** Build the form with validators. */
  private createForm(): void {
    this.contactForm = this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.minLength(2)]),
      email: this.fb.control('', [
        Validators.required,
        Validators.pattern(/[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/),
      ]),
      message: this.fb.control('', [Validators.required]),
      privacy: this.fb.control(false, {
        validators: [Validators.requiredTrue],
        updateOn: 'change',
      }),
    });
  }

  /** @returns name form control */
  get nameCtrl(): AbstractControl | null {
    return this.contactForm.get('name');
  }
  /** @returns email form control */
  get emailCtrl(): AbstractControl | null {
    return this.contactForm.get('email');
  }
  /** @returns message form control */
  get messageCtrl(): AbstractControl | null {
    return this.contactForm.get('message');
  }
  /** @returns privacy form control */
  get privacyCtrl(): AbstractControl | null {
    return this.contactForm.get('privacy');
  }

  /** Marks all controls as touched. */
  private touchAll(): void {
    this.contactForm.markAllAsTouched();
  }

  /**
   * Shows success overlay.
   * @param durationMs Duration in milliseconds
   */
  private showOverlayFor(durationMs: number): void {
    this.showSuccessOverlay = true;
    setTimeout(() => (this.showSuccessOverlay = false), durationMs);
  }

  /** Validate form and start submission. */
  onSubmit(): void {
    this.submitted = true;

    if (this.isSubmitting || this.contactForm.invalid) {
      this.handleInvalidForm();
      return;
    }
    this.startSubmission();
  }

  /** Start submission and build payload. */
  private startSubmission(): void {
    this.isSubmitting = true;
    this.submissionStatus = 'sending';

    const payload = this.buildPayload();
    this.sendForm(payload);
  }

  /** @returns typed payload from form */
  private buildPayload(): ContactPayload {
    const v = this.contactForm.value as ContactPayload;
    return {
      name: v.name?.trim() ?? '',
      email: v.email?.trim() ?? '',
      message: v.message?.trim() ?? '',
      privacy: !!v.privacy,
    };
  }

  /**
   * Send form data to backend.
   * @param formData ContactPayload
   */
  private sendForm(formData: ContactPayload): void {
    this.http
      .post('https://judithlenz.de/sendMail.php', formData, {
        responseType: 'text',
      })
      .pipe(finalize(() => (this.isSubmitting = false)))
      .subscribe({
        next: (response) => this.handleSuccess(response),
        error: (error) => this.handleError(error),
      });
  }

  /**
   * Handle success response.
   * @param response Server response
   */
  private handleSuccess(_response: any): void {
    this.resetFormAndCache();
    this.submissionStatus = 'idle';
    this.submitted = false;
    this.showOverlayFor(this.successOverlayDuration);
  }

  /**
   * Handle submission error.
   * @param error Error object
   */
  private handleError(error: any): void {
    console.error('❌ Sending failed', error);
    this.submissionStatus = 'error';
    setTimeout(() => (this.submissionStatus = 'idle'), 3000);
  }

  /** Log invalid form and mark touched. */
  private handleInvalidForm(): void {
    console.log('❌ Invalid form');
    this.touchAll();
  }

  /** Reset form and clear cache. */
  private resetFormAndCache(): void {
    this.contactForm.reset({
      name: '',
      email: '',
      message: '',
      privacy: false,
    });
    this.formCache.clearForm();
  }

  /** Scroll to top of page. */
  goToTop(): void {
    this.navigation.scrollToTop();
  }
}
