import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  /**
   *
   */
  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      age: ['', [Validators.required, Validators.min(10), Validators.max(100)]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required], // Radio
      terms: [false, Validators.requiredTrue], // Checkbox
    });

    // Log validation errors when value changes
    this.userForm.valueChanges.subscribe((resp) => {
      this.logValidationErrors();
    });
  }

  // Submit form
  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Submitted Successfully!', this.userForm.value);
    } else {
      console.log('Form has validation errors!');
      this.logValidationErrors();
    }
  }

  // Log validation errors
  logValidationErrors() {
    debugger;
    for (const key in this.userForm.controls) {
      if (this.userForm.controls[key].invalid) {
        console.log(`Error in ${key}:`, this.userForm.controls[key].errors);
      }
    }
  }
}
