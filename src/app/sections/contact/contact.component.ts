import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      privacy: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('✅ Formular gültig:', this.contactForm.value);
      // Hier später: Mailversand an PHP-Endpoint
      this.contactForm.reset(); // Formular leeren
    } else {
      console.log('❌ Formular ungültig');
      this.contactForm.markAllAsTouched(); // alle Fehler zeigen
    }
  }

  markAsTouched(controlName: string) {
    const control = this.contactForm.get(controlName);
    if (control && !control.touched) {
      control.markAsTouched();
      control.markAsDirty(); // 👈 wichtig!
    }
  }
}
