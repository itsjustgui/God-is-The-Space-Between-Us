import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators'; // Used for simplifying loading state

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  standalone: false,
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  reviewForm!: FormGroup;
  currentYear = new Date().getFullYear();
  isSubmitting = false;
  submitted = false;
  submissionSuccess = false;
  submissionError = false;

  // 🛑 REPLACE THIS WITH YOUR ACTUAL FORMSPREE HASH ID URL 🛑
  private EMAIL_ENDPOINT = 'https://formspree.io/f/xpwvneoe';

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.reviewForm = this.fb.group({
      // We will add optional fields for Name and Email which Formspree can handle
      name: [''],
      email: ['', [Validators.email]],
      review: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    this.submitted = true;
    this.submissionSuccess = false;
    this.submissionError = false;

    // Check validation
    if (this.reviewForm.invalid) {
      // Mark all fields as touched to display errors immediately
      this.reviewForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    // Get only the values, not the form controls
    const reviewData = this.reviewForm.value;

    // Post the data to the Formspree endpoint
    this.http
      .post(this.EMAIL_ENDPOINT, reviewData)
      .pipe(
        // 'finalize' ensures isSubmitting is set to false regardless of success or error
        finalize(() => {
          this.isSubmitting = false;
        }),
      )
      .subscribe({
        next: () => {
          // Formspree returns a successful response upon submission
          this.submissionSuccess = true;
          this.reviewForm.reset({ name: '', email: '', review: '' }); // Clear the form
          this.submitted = false; // Reset submitted state
        },
        error: (err) => {
          console.error('Formspree Submission Error:', err);
          // Formspree often returns 400 or 422 for configuration errors
          this.submissionError = true;
        },
      });
  }
}
